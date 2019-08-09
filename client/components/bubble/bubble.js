import pressure from 'pressure'

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
  const template = this
  // pressure.set(this.find('.bubble'), {
  //   start: function(event){
  //     console.log('start');
  //     // this is called on force start
  //   },
  //   startDeepPress: function(event){
  //     // this is called on "force click" / "deep press", aka once the force is greater than 0.5
  //     const enlargeFactor = 2
  //     const newWidth = template.data.width * enlargeFactor
  //     console.log(enlargeFactor, newWidth);
  //     template.width.set(getInlineStyle({width: newWidth}))
  //     template.size.set(getInlineStyle({width: newWidth, height: newWidth}))
  //   },
  //   change: function(force, event){
  //   },
  //   end: function(){
  //     template.width.set(getInlineStyle({width: template.data.width}))
  //     template.size.set(getInlineStyle({width: template.data.width, height: template.data.width}))
  //   },
  // });
}

Template.bubble.helpers({
})

Template.bubble.events({
  'click .bubble'(e, t){
    return
    if(Session.get('isDragging')){
      return
    }
    else {
      OpenModal('readBubbleModal', e.currentTarget)
    }
  },
})
