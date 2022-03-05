Template.bubble.created = function(){
  this.position = new ReactiveVar('')
  this.size = new ReactiveVar('')
  this.width = new ReactiveVar('')
  this.autorun(() => {
    let data = Template.currentData()
    Meteor.setTimeout(() => {
      this.position.set(getInlineStyle({left: data.left, top: data.top}))
      this.size.set(getInlineStyle({width: data.width, height: data.width}))
      this.width.set(getInlineStyle({width: data.width}))
    }, 50)
  })
}

Template.bubble.rendered = function(){
}

Template.bubble.helpers({
})

Template.bubble.events({
  'click .bubble'(e, t){
    if(Session.get('centerBubbleId') === this._id)
      OpenModal('readBubbleModal', e.target)
    else
      Session.set('centerBubbleId', this._id)
  },
})
