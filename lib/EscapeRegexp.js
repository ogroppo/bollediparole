const matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

EscapeRegexp = (string) => string.replace(matchOperatorsRe, '\\$&')

SearchRegexp = (string) => new RegExp(EscapeRegexp(string), 'i')
