Template.categoryPage.created = function(){
  this.bubbles = new ReactiveVar([])
  this.limit = new ReactiveVar(10)
  this.skip = new ReactiveVar(0)

  this.autorun(() => {
    let handle = this.subscribe('categoryPagePublication', Router.current().params.categoryName)
    if(!handle.ready())
      return

    this.bubbleCursor = BubbleCollection.find({}, {sort: {createdAt: -1}, limit: this.limit.get(), skip: this.skip.get()})

    const bubbles = getClientBubbles(this.bubbleCursor)

    this.bubbles.set(bubbles)

  });
}
Template.categoryPage.rendered = function(){

}

Template.categoryPage.helpers({
})
