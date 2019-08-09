Template.homePage.created = function(){

  this.autorun(() => {
    let handle = this.subscribe('homePagePublication', Session.get('centerBubble'))
    if(!handle.ready())
      return
  });
}
