const Employee = require('../lib/Employee')


//beforeAll(()=> {
 //return employee = new Employee('Bill')})

//afterAll(() => delete employee)


test(' check constructor', ()=> {
    const employee = new Employee("Bob", 0, "bob@bob.com")

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
        
})

test("check employee functions" ,()=>{
    const employee = new Employee("Bob", 0, "bob@bob.com")

    expect(employee.getRole()).toBe("Employee");
    expect(employee.getName()).toBe("Bob");
    expect(employee.getEmail()).toBe("bob@bob.com");

})

