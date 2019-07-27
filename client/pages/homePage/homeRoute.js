Router.route('/', {
	name: 'homeRoute',
  waitOn: function () {
    return Subscribe('homePagePublication')
  },
	data: function () {
		return {
      bubbles: BubbleCollection.find()
    }
	},
	action: function(){
    this.render('homePage');
	}
});
