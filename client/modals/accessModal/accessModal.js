Template.accessModal.created = function(){
  this.form = new ReactiveVar('login')
}

Template.accessModal.events({
  'change input[name="form"]'(e, t){
    console.log(e.target.value);
		t.form.set(e.target.value)
  }
})
