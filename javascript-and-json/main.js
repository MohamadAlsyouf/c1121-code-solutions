var books = [
  {
    isbn: '978-1455586691',
    title: 'Deep Work',
    author: 'Cal Newport'
  },
  {
    isbn: '978-0440237686',
    title: 'The Giver',
    author: 'Lois Lowry'
  },
  {
    isbn: '978-0399537752',
    title: 'Smart Thinking',
    author: 'Art Markman'
  }
];
console.log('array of books:', books);
console.log('typeOf array:', typeof (books));

var stringifiedBooks = JSON.stringify(books);
console.log('value of JSON.stringify(books):', stringifiedBooks);
console.log('typeOf JSON.stringify(books):', typeof (stringifiedBooks));

var studentData = '{"id": 21, "name": "Mohamad"}';
console.log('value of studentData:', studentData);
console.log('typeOf studentData:', typeof (studentData));

var parsedStudentData = JSON.parse(studentData);
console.log('result of JSON.parse(studentData):', parsedStudentData);
console.log('typeOf JSON.parse(studentData:', typeof (parsedStudentData));
