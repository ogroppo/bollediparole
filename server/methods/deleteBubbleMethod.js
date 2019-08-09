Meteor.methods({
  deleteBubbleMethod(_id){
    const bubble = BubbleCollection.findOne(_id)
    console.log(_id, bubble);
    if(bubble.createdBy === this.userId)
      BubbleCollection.remove(_id)
  }
})
