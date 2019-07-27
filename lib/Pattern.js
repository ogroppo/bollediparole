// pattern []
// root -> child -has-> grandchild
// [
//   {node: {name: "root"}},
//   {node: {name: "child"}, rel: {}},
//   {node: {name: "grandchild"}, rel: {name: "has"}}
// ]

const labelRegex = /\[(.*?)\]/g
const valueRegex = /(#[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)/
const relRegex = /(-.+?)??->/g
const nameRegex = /^([^[|#])+/

ParsePattern = (patternString = '', domainName) => {
	let pattern = []
  patternString.split(relRegex).forEach((entity, entityIndex) => {
		if(entityIndex === 0){
			pattern.push({node: parseNode(entity, domainName)})
		}else{
			if(entityIndex%2){
				pattern.push({rel: parseRel(entity, domainName)})
			}else{
				pattern[pattern.length - 1].node = parseNode(entity, domainName)
			}
		}
	})
  
  return pattern;
}

function parseRel(relString, domainName){
	//let rel = {parentDomainName: domainName, childDomainName: domainName} //missing data!!!!
	let rel = {}
  if(relString){ // "-rel name "
    rel.name = relString.slice(1).trim() // "rel name"
  }

	return rel
}

function parseNode(nodeString, domainName){
  let node = {}
  if(domainName)
    node.domainName = domainName
  var nameMatch = nameRegex.exec(nodeString)
  if(nameMatch){
    node.name = nameMatch[0].trim()
  }
  var labelMatch
  while(labelMatch = labelRegex.exec(nodeString)){
    node.labelNames = node.labelNames || []
    node.labelNames.push(labelMatch[1].trim())
  }

	return node;
}

getPatternEntityAtPostion = (patternString, selectionStart) => {

  let patternProps = []

  let entityOffset = 0
  patternString.split(relRegex).forEach((entity, entityIndex) => {
    if(!(entityIndex % 2)){ //node
      var nameMatch = nameRegex.exec(entity)
      if(nameMatch){
        var selection = nameMatch[0]
        var selectionStart = entityOffset
        patternProps.push({
          type: 'content',
          selectionStart,
          selectionEnd: selectionStart + selection.length,
          text: selection.trim()
        })
      }
      var labelMatch
      while(labelMatch = labelRegex.exec(entity)){
        var propStart = entityOffset + labelMatch.index
        var propEnd = propStart + labelMatch[0].length
        var selectionStart = propStart + 1 //"["
        var selection = labelMatch[1]
        patternProps.push({
          type: 'label',
          selectionStart,
          selectionEnd: selectionStart + selection.length,
          text: selection.trim()
        })
      }
      entityOffset += entity.length
    }else{ //rel
      if(entity){ // "-rel name"
        let selection = entity.slice(1) // "rel name"
        let propStart = entityOffset
        let selectionStart = entityOffset + 1 // "-"
        let selectionEnd = selectionStart + selection.length
        let propEnd = propStart + entity.length + 2 // "->"
        patternProps.push({
          type: 'rel',
          selectionStart,
          selectionEnd,
          text: selection.trim()
        })
        entityOffset = propEnd
      }else{
        entityOffset += 2 //"->".length
      }

    }
  })

  for (var property of patternProps) {
    if(selectionStart >= property.selectionStart && selectionStart <= property.selectionEnd)
      return property;
  }
}
