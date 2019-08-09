Template.readBubbleModal.created = function(){
  this.subscribe('bubblePublication', this.data._id)
}

Template.readBubbleModal.events({
  'click .deleteBubble'(e, t){
		Meteor.call('deleteBubbleMethod', this._id, (err, res) => {
      CloseModal()
    })
  }
})

Template.readBubbleModal.helpers({
  author(){
    let author = Meteor.users.findOne(this.createdBy)
    if(author)
		  return author.username
  }
})
