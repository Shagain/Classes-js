// Write a JavaScript program that creates a class called
//  University with properties for university name and departments. 
//  Include methods to add a department, remove a department, 
//  and display all departments. Create an instance of the 
//  University class and add and remove departments.

class University {
  constructor(name, departments) {
    this.name = name;
    this.departments = departments;

    display()
    {
      console.log(`University Name : ${name} `);
    }

    createDepartment()
    {

    }

    removeDepartment()
    {

    }

    displayAllDepartment()
    {

    }

  }
}

class department {
  constructor(DepName, DepID) {
    this.DepName = DepName;
    this.DepID = DepID;
  }

  display() {
    console.log(`Department name: ${this.DepName} Department ID : ${this.DepID}`);
  }
}