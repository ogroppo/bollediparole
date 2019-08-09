Meteor.methods({
  createBubbleMethod(title, categories, text){
    BubbleCollection.insert({
      title,
      categories,
      text
    })

  }
})
