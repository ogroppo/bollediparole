Template.modal.created = function(){
	this.activeSuggestionIndex = -1
}

Template.modal.rendered = function(){
	this.find(FocusableElementsSelector).focus()
}

Template.modal.events({
	'click .modal_backdrop'(e, t){
		CloseModal()
	},
	'click [event="CloseModal"]'(e, t){
		CloseModal()
	},
	'keydown'(event, template){
		if (event.keyCode == 27){
      return CloseModal()
    }

    if(event.keyCode !== 9) //not a focus
      return

		let focusableElements = template.findAll(FocusableElementsSelector)
		if (event.shiftKey) {
			if(document.activeElement.isSameNode(focusableElements[0])){
				event.preventDefault()
				focusableElements[focusableElements.length - 1].focus()
			}
    } else {
			if(document.activeElement.isSameNode(focusableElements[focusableElements.length - 1])){
				event.preventDefault()
				focusableElements[0].focus()
			}
		}
	}
})

var modalTrigger = null;
var modalTemplate = null;
OpenModal = (templateName, trigger, options = {}) => {
	modalTrigger = trigger
	let dataContext = Blaze.getData(trigger)
  if(options.addContext)
    dataContext = {...dataContext, ...options.addContext}
	modalTemplate = Blaze.renderWithData(Template[templateName], dataContext, document.body)
}

CloseModal = () => {
  $('.modal_panel').addClass('animationOut')
  Meteor.setTimeout(()=>{
    Blaze.remove(modalTemplate)
    modalTrigger.focus()
  }, 1000)
}
