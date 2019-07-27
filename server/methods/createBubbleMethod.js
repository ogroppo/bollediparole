Meteor.methods({
  createBubbleMethod(title, labels, text){
    BubbleCollection.insert({
      title,
      labels,
      text
    })
    
  }
})
