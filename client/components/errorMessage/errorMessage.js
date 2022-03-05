Template.errorMessage.created = function(){
	this.timeout;
}

Template.errorMessage.rendered = function(){
	this.timeout = Meteor.setTimeout(()=>{
		Session.set('errorMessage', null)
	}, 1500)
}

Template.errorMessage.events({
	'mouseover .errorMessage'(e, t){
		Meteor.clearTimeout(t.timeout)
	},
	'click button'(e, t){
		Session.set('errorMessage', null)
	}
})
