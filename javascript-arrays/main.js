var colors = ['red', 'white', 'blue'];
console.log('Value of colors[0]:', colors[0]);
console.log('Value of colors[1]:', colors[1]);
console.log('Value of colors[2]:', colors[2]);
console.log('America is' + ' ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.');
colors[2] = 'green';
console.log('Mexico is' + ' ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.');
console.log('Value of colors:', colors);

var students = ['Ed', 'Edd', 'Eddy', 'Plank'];
var numberOfStudents = students.length;
console.log('There are' + ' ' + numberOfStudents + ' ' + 'students in the class.');
var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('The last student in the array is ' + lastStudent + '.');
console.log('Value of students: ', students);
