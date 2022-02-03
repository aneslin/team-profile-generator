const Manager = require("../lib/Manager")

test("check constructor", ()=> {
    manager = new Manager('Bob', 'bob@bob.com', 2,'540')
    expect(manager.name).toEqual(expect.any(String))
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.role).toBe('Manager')
    expect(manger.id).toEqual(expect.any(String))
    expect(manger.office).toEqual(expect.any(String))
})

test("check manager functions" ,()=>{
    const manager = new Manager('Bob', 'bob@bob.com', 2,'540')

    expect(manager.getRole()).toBe("Manager");
    expect(manager.getName()).toBe("Bob");
    expect(manager.getEmail()).toBe("bob@bob.com");
})


