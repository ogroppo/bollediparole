const focusableElements = [
  'a[href]:visible',
  'button:not([disabled]):visible',
  'area[href]:visible',
  'input:not([disabled]):not([type=hidden]):visible',
  'select:not([disabled]):visible',
  'textarea:not([disabled]):visible',
  'iframe:visible',
  'object:visible',
  'embed:visible',
  '*[contenteditable]:visible',
	'[tabindex]:not([tabindex^="-"]):visible'
];

FocusableElementsSelector = focusableElements.join(', ')
