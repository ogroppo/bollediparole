Accounts.onResetPasswordLink((token, doneFunction) => {
	Session.set('resetPasswordToken', token);
})

function doneFunction(...args){
	
}
