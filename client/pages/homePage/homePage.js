Template.bubble.created = function(){
  this.class = new ReactiveVar('')
  setTimeout(()=>this.class.set('animate'), this.data.index * 1000)
}

Template.homePage.helpers({
  bubbleDetail(){
    return Session.get('bubble')
  }
})

Template.homePage.events({
  'click .chiudiBolla'(e, t){
    Session.set('bubble', null)
  }
})


Template.bubble.helpers({
  class(){
    return Template.instance().class.get()
  },
  left(){
    return Math.random() * $(window).width()
  }
})

Template.bubble.events({
  'click .bubble'(e, t){
    console.log(this, t.data);
    Session.set('bubble', this)
    //t.class.set('explode')
  },
})
