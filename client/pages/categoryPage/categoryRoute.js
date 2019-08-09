Router.route('/categorie/:categoryName', {
	name: 'categoryRoute',
	action: function(){
    this.render('categoryPage');
	}
});
