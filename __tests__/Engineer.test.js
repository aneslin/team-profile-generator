const Engineer = require("../lib/Engineer")

test(' check constructor', ()=> {
    const engineer = new Engineer("Bob", "bob@bob.com", 0, "bobgit")

    expect(engineer.name).toEqual(expect.any(String))
    expect(engineer.id).toEqual(expect.any(Number))
    expect(engineer.email).toEqual(expect.any(String))
    expect(engineer.github).toEqual(expect.any(String))

})