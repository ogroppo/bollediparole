Meteor.publish('bubblePublication', function(_id){
  const bubble = BubbleCollection.findOne(_id)
	return [
		Meteor.users.find(bubble.createdBy),
	]
})
