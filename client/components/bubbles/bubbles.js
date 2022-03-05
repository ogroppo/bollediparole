Template.bubbles.created = function(){
  this.reactiveBubblesStyle = new ReactiveVar(``)
  this.reactiveBubbles = new ReactiveVar([])

  this.autorun(() => {
    const bubbleCursor = BubbleCollection.find({}, {sort: {createdAt: -1}})
    const {bubbles, center} = getClientBubbles(bubbleCursor)
    this.reactiveBubbles.set(bubbles)
    this.reactiveBubblesStyle.set(getInlineStyle({left: center.left, top: center.top}))
  })
}

Template.bubbles.rendered = function(){
}

Template.bubbles.helpers({
})

Template.bubbles.events({
  'click .bubbles_backdrop'(e, t){
    Session.set('centerBubbleId', null)
  }
})
