Template.homePage.created = function(){

  this.autorun(() => {
    let handle = this.subscribe('homePagePublication', Session.get('centerBubbleId'))
    if(!handle.ready())
      return
  });
}
