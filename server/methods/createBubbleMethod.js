Meteor.methods({
  createBubbleMethod(title, categories, text){
    check(categories, Array)
    categories.forEach(name => {
      CategoryCollection.upsert({
        name
      })
    })
    BubbleCollection.insert({
      title,
      categories,
      text
    })
  }
})
