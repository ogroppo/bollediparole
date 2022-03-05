Template.readBubbleModal.created = function(){
  this.subscribe('bubblePublication', this.data._id)
  this.edit = new ReactiveVar(false)
  this.showInfo = new ReactiveVar(false)
}

Template.readBubbleModal.events({
  'submit .editBubbleForm'(e, t){
    let fields = getFormFields(e.target)
		Call('editBubbleMethod', t.data._id, fields, (res) => {
      CloseModal()
    })
  },
  'click .title'(e, t){
    t.showInfo.set(!t.showInfo.get())
  },
  'click .voteButton'(e, t){
		Call('voteBubbleMethod', this._id, (err, res) => {
    })
  },
  'click .deleteBubble'(e, t){
		Call('deleteBubbleMethod', this._id, (err, res) => {
      CloseModal()
    })
  },
  'click .editBubble'(e, t){
    console.log("msg");
		t.edit.set(true)
  }
})

Template.readBubbleModal.helpers({
  reactiveBubble(){
    return BubbleCollection.findOne(this._id)
  },
  votedClass(votes){
    return (votes || []).find(vote => vote.userId === Meteor.userId()) ? 'voted' : ''
  },
  author(){
    let author = Meteor.users.findOne(this.createdBy)
    if(author)
		  return author.username
  },
  categoriesString(){
    return this.categories.join(', ')
  },
  voteTypes(){
    return VoteTypes
  }
})
