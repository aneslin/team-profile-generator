const Intern = requre('../lib/intern')


test(' check constructor', ()=> {
    const intern = new Intern("Bob", "bob@bob.com", 0, "bob College")

    expect(intern.name).toEqual(expect.any(String))
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.email).toEqual(expect.any(String))
    expect(intern.school).toEqual(expect.any(String))
});



