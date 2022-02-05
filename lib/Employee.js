class Employee{
constructor(name, id, email  ){
    this.name = name
    this.id =  id
    this.email = email
}

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

