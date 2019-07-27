Template.layout.events({
  'click [modal]'(e){
		let modalName = e.currentTarget.getAttribute('modal')
		OpenModal(modalName, e.currentTarget)
	},
})
