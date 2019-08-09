Router.route('/', {
	name: 'homeRoute',
	action: function(){
    this.render('homePage');
	}
});
