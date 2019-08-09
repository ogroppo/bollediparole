Meteor.publish('homePagePublication', function(centerBubbleId){
  let query = {}
  if(centerBubbleId){
    const centerBubble = BubbleCollection.findOne(centerBubbleId)
    query = {createdAt: {$lt: centerBubble.createdAt}}
  }
	return BubbleCollection.find(query, {sort: {createdAt: -1}, limit: 10})
})
