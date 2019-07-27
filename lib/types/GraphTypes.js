GraphTypes = [
	{
		name: "Histogram",
    description: "Can be used in only if there are Contents with <b>Number</b> field set",
    patternTemplate: "histogramPatternFieldset",
    pageTemplate: "histogram"
	},
  {
    name: "Range",
    description: "Can be used in only if there are two child Contents with <b>Number</b> field set",
    patternTemplate: "rangePatternFieldset",
    pageTemplate: "range"
  },
	{
		name: "Pie",
    description: "Can be used in only if there are Contents with <b>Number</b> field set",
    patternTemplate: "piePatternFieldset",
    pageTemplate: "pieChart"
	},
  {
    name: "Scatter",
    description: "Can be used in only if there are Contents with two <b>Numeric</b> children",
    patternTemplate: "scatterPatternFieldset",
    pageTemplate: "scatter"
  },
	{
		name: "Timeline",
    description: "Can be used in only if there are Contents with <b>Date</b> field set",
    patternTemplate: "timelinePatternFieldset",
    pageTemplate: "timeline"
	}
]
