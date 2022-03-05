Meteor.publish('homePagePublication', function(centerBubbleId){
  let query = {}
  let limit = 5
  if(centerBubbleId){
    const lastBubblesIds = BubbleCollection.find({}, {sort: {createdAt: 1}, limit})
    .map(bubble => bubble._id)
    let centerBubble

    if(lastBubblesIds.slice(0, limit - 1).includes(centerBubbleId)){
      const last = BubbleCollection.findOne(lastBubblesIds[limit - 1])
      query = {createdAt: {$lte: last.createdAt}}
    }else{
      let centerBubble = BubbleCollection.findOne(centerBubbleId)
      const next = BubbleCollection.findOne({createdAt: {$gt: centerBubble.createdAt}}, {sort: {createdAt: 1}, limit: 1})
      if(next){
        query = {createdAt: {$lte: next.createdAt}}
      }
    }
  }

	return BubbleCollection.find(query, {sort: {createdAt: -1}, limit})
})
