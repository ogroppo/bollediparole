Meteor.publish('categoryPagePublication', function(categoryName){
	return [
		BubbleCollection.find({categories: categoryName}),
	]
})
