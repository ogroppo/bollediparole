FormatNumber = (number, fixed = 2) => {

	let exponential = Math.floor(Math.log10(number))

	if(exponential <= -6){
    return formatSymbol(number, 1e6, fixed, 'μ')
	}

	if(exponential > -6 && exponential <= -3){
    return formatSymbol(number, 1e3, fixed, 'm')
	}

  if(exponential > -3 && exponential < 3){
    return formatSymbol(number, 1, fixed, '')
  }

	if(exponential >= 3 && exponential < 6){
    return formatSymbol(number, 1e3, fixed, 'k')
	}

	if(exponential >= 6 && exponential < 9){
    return formatSymbol(number, 1e6, fixed, 'M')
	}

	if(exponential >= 9 && exponential < 12){
    return formatSymbol(number, 1e9, fixed, 'B')
	}

	if(exponential >= 12 && exponential < 15){
		return formatSymbol(number, 1e12, fixed, 'T')
	}

	if(exponential >= 15){
		return number.toExponential()
	}
}

function formatSymbol(number, exp, fixed, symbol){
  return number === 0?0:parseFloat((number/exp).toFixed(fixed)) + symbol
}
