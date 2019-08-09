import interact from 'interactjs'

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
  const template = this
  // interact('.bubbles_drag').draggable({
  //   inertia: true,
  //   onstart() {
  //     console.log('onstart');
  //     Session.set('isDragging', true)
  //   },
  //   onmove(event) {
  //     var target = event.target
  //     // keep the dragged position in the data-x/data-y attributes
  //     var left = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  //     var top = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
  //     template.reactiveBubblesStyle.set(getInlineStyle({left, top}))
  //     // update the posiion attributes
  //     target.setAttribute('data-x', left)
  //     target.setAttribute('data-y', top)
  //   },
  //   onend() {
  //     console.log('onend');
  //     Meteor.setTimeout(() => {
  //       Session.set('isDragging', false)
  //     }, 100)
  //   }
  // })
}

Template.bubbles.helpers({

})

Template.bubbles.events({
  'click .bubble'(e, t){
    Session.set('centerBubble', this._id)
  }
})
