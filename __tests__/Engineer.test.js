const Engineer = require("../lib/Engineer")

test(' check constructor', ()=> {
    const engineer = new Engineer("Bob", "bob@bob.com", 0, "bobgit")

    expect(engineer.name).toEqual(expect.any(String))
    expect(engineer.id).toEqual(expect.any(Number))
    expect(engineer.email).toEqual(expect.any(String))
    expect(engineer.github).toEqual(expect.any(String))
   
})

test("check enginner functions" ,()=>{
    const engineer = new Engineer("Bob", "bob@bob.com",0, 'bobgit' )

    expect(engineer.getRole()).toBe("Engineer");
    expect(engineer.getName()).toBe("Bob");
    expect(engineer.getEmail()).toBe("bob@bob.com");
    expect(engineer.getGithub()).toBe('bobgit');

})