/* exported student */
var student = {
  firstName: 'Mohamad',
  lastName: 'Alsyouf',
  subject: 'JavaScript',
  getFullName: function () {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  },
  getIntroduction: function () {
    var introduction = 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
    return introduction;
  }
};
