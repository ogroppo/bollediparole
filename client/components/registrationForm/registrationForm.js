Template.registrationForm.events({
  'submit form'(e, t){
		let email = e.target.email.value
		let username = e.target.username.value
		let password = e.target.password.value
		Accounts.createUser({
      email,
      username,
      password
    }, err => {
			if(err){
				ErrorMessage(err.reason)
			}else{
				CloseModal()
			}
		})
  }
})
