Template.createBubbleModal.events({
  'submit form'(e, t){
		let title = e.target.title.value
		let labels = [e.target.labels.value]
		let text = e.target.text.value
		Meteor.call('createBubbleMethod', title, labels, text, (err, res) => {
      console.log(err, res);
      CloseModal()
    })
  }
})
