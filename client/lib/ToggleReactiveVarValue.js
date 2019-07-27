ToggleReactiveVarValue = (reactiveVar, value) => {
  let _reactiveVar = reactiveVar.get()
  const valueIndex = _reactiveVar.indexOf(value)
  if(valueIndex > -1)
    _reactiveVar.splice(valueIndex, 1)
  else
    _reactiveVar.push(value)
    
  reactiveVar.set(_reactiveVar)
}
