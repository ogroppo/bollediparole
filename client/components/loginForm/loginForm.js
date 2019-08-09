Template.loginForm.events({
  'submit form'(e, t){
		let email = e.target.email.value
		let password = e.target.password.value
    Meteor.loginWithPassword(email, password, (err) => {
      if(err){
        return ErrorMessage(err.reason)
      }
      CloseModal()
    })
  }
})
