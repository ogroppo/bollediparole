SendError = (reason) => {
  throw new Meteor.Error(null, reason)
}
