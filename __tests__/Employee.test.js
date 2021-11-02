const Employee = require("../lib/Employee");

// how to make tests:
// define the goal using the it()
// recreate the env
// define a source of truth/what is the answer
// execute and compare

// function for (name, id, email) will use this a few times below
function createEmployee(name="Aaron", id="123", email="Aaron@fakemail.com") {
  return new Employee (name, id, email);
};

describe('test for the emplyee class', () => {
  // instantiate test
  it('should be able to instantiate', () => {
    const result = createEmployee();
    expect(result instanceof Employee).toBe(true);
  });
  //propertie tests
  it('should contain the "name" property', () => {
    const result = createEmployee();
    expect(result).toHaveProperty("name"); 
  });
  it('should contain the "id" property', () => {
    const result = createEmployee();
    expect(result).toHaveProperty("id");
  });
  it('should contain the "email" property', () => {
    const result = createEmployee();
    expect(result).toHaveProperty("email");  
  });
  // method test
  it('should return name when "getName()" is called', () => {
    const name = "Aaron"
    const result = createEmployee(name);
    expect(result.getName()).toBe(name);
  });
  it('should return id when "getId()" is called', () => {
    const id = "123"
    const result = createEmployee("",id);
    expect(result.getId()).toBe(id);
  });
  it('should return email when "getEmail()" is called', () => {
    const email = "test@fakemail.com"
    const result = createEmployee("","",email);
    expect(result.getEmail()).toBe(email);
  });
  it('should return role when "getRole()" is called', () => {
    const role = "Employee"
    const result = createEmployee();
    expect(result.getRole()).toBe(role);
  });

  it('can only accept an email address', () => {
    
    const makeEmployee = ()  => {
      return new Employee('test@fakemail.com');
    }

    expect(makeEmployee).toThrow(Error);

  })
});