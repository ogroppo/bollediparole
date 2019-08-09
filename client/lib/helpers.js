Template.registerHelper('debug', (...args) => console.log(...args))

Template.registerHelper('Concat', (a, b) => a + b)

Template.registerHelper('IsNotUndefined', varible => varible !== undefined )

Template.registerHelper('Height', varible => cssHeight(varible))

Template.registerHelper('CurrentDomainName', () => CurrentDomainName())

Template.registerHelper('CurrentContentName', () => CurrentContentName())

Template.registerHelper('IsCurrentRoute', (routeName) => Router.current().route.getName() === routeName)

Template.registerHelper('LabelColor', (labelName) => LabelColor(labelName))

Template.registerHelper('Background', (labelName) => `background: ${LabelColor(labelName)};`)

Template.registerHelper('FromNow', (date)=> date?moment(date).fromNow():'' )

Template.registerHelper('ToExpNotation', number => ToExpNotation(number))

Template.registerHelper('ToReadeableDate', date => date ? moment(date).format('[il] D MM YYYY [alle] HH:mm') : '' )

Template.registerHelper('CurrentUserName', () => Meteor.user().username )

Template.registerHelper('SessionGet', sessionName => Session.get(sessionName) )

Template.registerHelper('ReactiveVar', varName => Template.instance()[varName])

Template.registerHelper('Get', reactiveVar => reactiveVar.get() )

Template.registerHelper('ReactiveVarGet', (varName, prop = '') => {
  try {
    let reactiveVar = Template.instance()
    varName.split('.').forEach(nestedName => reactiveVar = reactiveVar[nestedName])
    let reactiveVarGet = reactiveVar.get()
    return typeof prop === 'string'?reactiveVarGet[prop]:reactiveVarGet
  } catch (e) {
    console.error('ReactiveVarGet error', e);
  }
})

Template.registerHelper('SortDir', (fieldName) => {
  return Template.instance().sort.get()[fieldName]
})

Template.registerHelper('Count', cursor => cursor.count() )

Template.registerHelper('GT', (a, b) => a > b )

Template.registerHelper('LT', (a, b) => a < b )

Template.registerHelper('IsMe', userId => Meteor.userId() === userId )

Template.registerHelper('Equals', (a, b) => a === b)

Template.registerHelper('Or', (a, b) => a || b)

Template.registerHelper('Translate', (x, y) => Translate(x, y))

Template.registerHelper('IndexToPosition', (index) => index + 1)

Template.registerHelper('HighlightMatch', (name, part) => isName(part)?name.replace(new RegExp(`(${EscapeRegexp(part)})`,'gi'), '<b>$1</b>'):name)

Template.registerHelper('Inc', (number) => number + 1)

Template.registerHelper('ContentString', (content) => {
  let contentArray = []
  if(content.labelNames)
    contentArray.push(content.labelNames.map(labelName => `[${labelName}]`).join(''))
  if(content.name)
    contentArray.push(content.name)
  if(content.number !== undefined)
    contentArray.push(content.number)
  if(content.date)
    contentArray.push(content.date)
  if(content.text)
    contentArray.push(content.text)

  return contentArray.join(' ')
})

Template.registerHelper('LabelRelTypes', () => LabelRelTypes)

Template.registerHelper('ContentRelTypes', () => ContentRelTypes)

Template.registerHelper('canEditDomain', (domain) => {
  return domain.users.some(user => {
    return user.userId === Meteor.userId() && EditDomainRoles.includes(user.role)
  })
})

Template.registerHelper('canEditPeople', (domain) => {
  return domain.users.some(user => {
    return user.userId === Meteor.userId() && EditPeopleRoles.includes(user.role)
  })
})

Template.registerHelper('canWrite', () => {
  let currentDomainName = CurrentDomainName()
  let userDomain = Meteor.user().domains.find(({name}) => name === currentDomainName)
  return WriteRoles.includes(userDomain.role)
})

Blaze.TemplateInstance.prototype.parentTemplate = function (levels = 1) {
  var view = this.view;
  while (view) {
    if (view.name.substring(0, 9) === "Template." && !(levels--)) {
      return view.templateInstance();
    }
    view = view.parentView;
  }
};
