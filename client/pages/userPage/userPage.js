Template.userPage.created = function(){
  this.bubbles = new ReactiveVar([])
  this.limit = new ReactiveVar(10)
  this.skip = new ReactiveVar(0)

  this.autorun(() => {
    let handle = this.subscribe('userPagePublication')
    if(!handle.ready())
      return

    this.bubbleCursor = BubbleCollection.find({createdBy: Router.current().params.userId}, {sort: {createdAt: -1}, limit: this.limit.get(), skip: this.skip.get()})

    const bubbles = getClientBubbles(this.bubbleCursor)

    this.bubbles.set(bubbles)
  });
}
Template.userPage.rendered = function(){

}

Template.userPage.helpers({
})
