getFormFields = (form, options = {}) => {
  let data = {};
  [...form.elements].forEach(element => {
    if(element.name){
      let keys = element.name.split('.')
      let lastKey = keys.pop()

      var schema = data
      keys.forEach(key => {
        schema = schema[key] = schema[key] || {}
      })

      if(!options.keepEmpty && !element.value)
        return

      if(element.type === 'number') {
        schema[lastKey] = parseFloat(element.value)
      } else if(element.type === 'checkbox'){
        if(element.checked)
          schema[lastKey] = element.value ? true : false
      } else if(element.type === 'radio'){
        if(element.checked)
          schema[lastKey] = element.value
      } else if(element.name.endsWith('labelNames')){
        schema[lastKey] = schema[lastKey] || []
        schema[lastKey].push(element.value)
      } else {
        schema[lastKey] = element.value
      }
    }
  })

  return data
}
