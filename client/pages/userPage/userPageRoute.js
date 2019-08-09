Router.route('/user/:userId', {
	name: 'userRoute',
	action: function(){
    this.render('userPage');
	}
});
