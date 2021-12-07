var student = {
  firstName: 'Mohamad',
  lastName: 'Alsyouf',
  age: 21
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'accountant';
console.log('Value of student.livesInIrvine:', student.livesInIrvine);
console.log('Value of student.previousOccupation:', student.previousOccupation);
console.log('Value of student:', student);

var vehicle = {
  make: 'BMW',
  model: 'E30',
  year: 1989
};
vehicle['color'] = 'blue';
vehicle['isConvertible'] = true;
console.log('Value of vehicle["color"]:', vehicle['color']);
console.log('Value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log(vehicle);

var pet = {
  name: 'widy',
  type: 'cat'
};
delete pet.name;
delete pet.type;
console.log('Value of pet:', pet);
