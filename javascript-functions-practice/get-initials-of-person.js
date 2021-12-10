/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var personInitials = person.firstName[0] + person.lastName[0];
  return personInitials;
}
