Meteor.methods({
  editBubbleMethod(_id, fields){
    check(_id, String)
    check(fields, Object)

    fields.categories.split(',').map(c => c.trim()).forEach(name => {
      CategoryCollection.upsert({ name }, {})
    })
    BubbleCollection.update(_id, { $set: fields })
  }
})
