Subscribe = (subscriptionName, ...args) => Meteor.subscribe(subscriptionName, ...args, {
	onError: (err) => {
    if(err.reason === 'domainNotFound')
      return Router.current().render('domainNotFound')
    if(err.reason === 'graphNotFound')
      return Router.current().render('graphNotFound')
    if(err.reason === 'labelNotFound')
      return Router.current().render('labelNotFound')

    ErrorMessage(err.reason)
  }
})
