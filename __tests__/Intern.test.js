const Intern = requre('../lib/intern')


test(' check constructor', ()=> {
    const intern = new Intern("Bob", "bob@bob.com", 0, "bob College")

    expect(intern.name).toEqual(expect.any(String))
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.email).toEqual(expect.any(String))
    expect(intern.school).toEqual(expect.any(String))
});

test('check functions', ()=> {
    const intern = new Intern("Bob", "bob@bob.com", 0, "bob College")

    expect(intern.GetRole()).toBe('Intern')
    expect(intern.GetEmail()).toBe('bob@bob.com')
    expect(intern.GetId()).toBe(0)
    expect(intern.GetName).toBe("Bob")

})


