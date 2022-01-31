class Employee{
constructor(name, email, id ){
    this.name = name
    this.email = email
    this.id =  id};

    getRole(){
        return "Employee"
    }

    getEmail(){
        return this.email
    }

    getName(){
        return this.name
    }

    getId(){
        return this.id
    }


}
    
module.exports = Employee

