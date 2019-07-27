ToExpNotation = number => {
  if(number === 0)
    return "0"

  const power = Math.floor(Math.log10(Math.abs(number)))
  if(power > 1 || power < -1){
    const exponential = number.toExponential()
    const expFactor = parseFloat(exponential.split('e')[0])
    const fixed = expFactor.toFixed(1)
    const displayFactor = parseFloat(fixed) //remove 00 from 1.00
    let pre = ''
    if(displayFactor === 1){
      pre = ''
    }else if(displayFactor === -1){
      pre = "-"
    }else{
      pre = displayFactor + "&middot;"
    }
    return `${pre}10<sup>${power}</sup>`
  }

  return parseFloat(number.toFixed(1)).toString()
}
