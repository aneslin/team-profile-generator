const Manager = require("../lib/Manager")

test("check constructor", ()=> {
    manager = new Manager('Bob',2, 'bob@bob.com', '540')
    expect(manager.name).toEqual(expect.any(String))
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.id).toEqual(expect.any(Number))
    expect(manager.officeNumber).toEqual(expect.any(String))
})

test("check manager functions" ,()=>{
    const manager = new Manager('Bob',2, 'bob@bob.com', '540')

    expect(manager.getRole()).toBe("Manager");
    expect(manager.getName()).toBe("Bob");
    expect(manager.getEmail()).toBe("bob@bob.com");
})


