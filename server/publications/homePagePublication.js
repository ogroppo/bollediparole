Meteor.publish('homePagePublication', function(){
	return [
		BubbleCollection.find(),
	]
})
