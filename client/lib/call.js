Call = function(methodName, ...args){
	let callback;
	if(typeof args.slice(-1)[0] === 'function' )
		callback = args.pop()

	Meteor.call(methodName, ...args, function(err, res){
		if(err)
			ErrorMessage(err.reason)
		else if(callback)
			callback(res)
	})
}
