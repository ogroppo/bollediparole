RoleTypes = [
  {
    name: 'owner',
    editDomain: true,
    editPeople: true,
    write: true,
    read: true,
    description: "Has full permissions"
  },
  {
    name: 'admin',
    editPeople: true,
    write: true,
    read: true,
    description: "Can do everything but changing domain's attributes"
  },
  {
    name: 'contributor',
    write: true,
    read: true,
    description: "Can create stuff, but not add or remove people"
  },
  {
    name: 'member',
    read: true,
    description: "Can read only"
  }
]

ReadRoles = RoleTypes.filter(role => role.read).map(role => role.name)

WriteRoles = RoleTypes.filter(role => role.write).map(role => role.name)

EditDomainRoles = RoleTypes.filter(role => role.editDomain).map(role => role.name)

EditPeopleRoles = RoleTypes.filter(role => role.editPeople).map(role => role.name)
