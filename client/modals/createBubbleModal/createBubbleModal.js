Template.createBubbleModal.events({
  'submit form'(e, t){
		let title = e.target.title.value
		let categories = e.target.categories.value.split(',').map(c => c.trim())
		let text = e.target.text.value
		Meteor.call('createBubbleMethod', title, categories, text, (err, res) => {
      CloseModal()
    })
  }
})
