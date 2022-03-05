Meteor.methods({
  voteBubbleMethod(_id){
    check(_id, String)

    const userId = this.userId
    let hasVoted = BubbleCollection.findOne({_id, votes: { $elemMatch: {userId} }})
    if(hasVoted){
      console.log('removing', {_id}, {$pull: {votes: {userId} }});
      BubbleCollection.update(
        _id,
        {
          $pull: {
            votes: {userId}
          }
        }
      )
    }
    else
      BubbleCollection.update({_id}, {$push: {votes: {userId, date: new Date()} }})
  }
})
