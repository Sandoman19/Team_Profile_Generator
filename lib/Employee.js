class Employee {

  constructor (name, id, email) {
    // if(typeof email !== "test@test.com") {
    //   throw new Error ("Must be an email address")
    // }
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }

}

module.exports = Employee;