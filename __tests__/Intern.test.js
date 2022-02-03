const Intern = require('../lib/Intern')


test(' check constructor', ()=> {
    const intern = new Intern("Bob", "bob@bob.com", 0, "bob College")

    expect(intern.name).toEqual(expect.any(String))
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.email).toEqual(expect.any(String))
    expect(intern.school).toEqual(expect.any(String))
});

test('check functions', ()=> {
    const intern = new Intern("Bob", "bob@bob.com", 0, "bob College")

    expect(intern.getRole()).toBe('Intern')
    expect(intern.getEmail()).toBe('bob@bob.com')
    expect(intern.getId()).toBe(0)
    expect(intern.getName()).toBe("Bob")

})


