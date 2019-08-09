getInlineStyle = (styles) => {
  let style = ''
  for(var prop in styles){
    style += `${prop}:${styles[prop]}px;`
  }
  return style
}
