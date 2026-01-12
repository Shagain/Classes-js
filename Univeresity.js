// Write a JavaScript program that creates a class called
//  University with properties for university name and departments. 
//  Include methods to add a department, remove a department, 
//  and display all departments. Create an instance of the 
//  University class and add and remove departments.

class Department {
  constructor(DepName, DepID) {
    this.DepName = DepName;
    this.DepID = DepID;
  }

  display() {
    console.log(`Department name: ${this.DepName} Department ID : ${this.DepID}`);
  }
}


class University {
  constructor(name, departments) {
    this.name = name;
    this.departments = departments;
  }

  display() {
    console.log(`University Name : ${this.name} `);
  }

  displayAllDepartment() {
    for (let dep of this.departments) {
      dep.display();
    }
  }

  addDepartment(name, id) {

    // let duplicate = false;

    for (const dep of this.departments) {
      if (dep.DepID === id) {
        console.log(`${id} department ID Already exists`);
        duplicate = true;

        return;
        // break;
      }
    }

    // if (duplicate == false) {
    this.departments.push(new Department(name, id));
    console.log(` Department ID ${id} id succesfully add to the University`);

    console.log(`-- New list of department --`);
    this.displayAllDepartment();

    // for (const UpdateDep of this.departments) {
    //   UpdateDep.display();
    // }
    // }
  }

  removeDepartment(id) {

    for (const dep of this.departments) {
      if (dep.DepID === id) {
        console.log(`${id} department ID not found`);

        return;
      }

      for (const dep of this.departments) {

        let index = 1;
        if (dep.DepID === id) {
          console.log(`Department name: ${dep.DepName} with Department ID : ${dep.DepID} has been deleted succesfully`);
          departmentList.splice(index, 1);

          break;
        }
        index++;
      }

      console.log(`-- New list of department --`);

      // for (const UpdateDep of this.departments) {
      //   UpdateDep.display();
      // }
      this.displayAllDepartment();

    }

  }
}



let departmentList = [];

let Dep1 = new Department("Dep1", "D-001");
let Dep2 = new Department("Dep2", "D-002");
let Dep3 = new Department("Dep3", "D-003");
let Dep4 = new Department("Dep4", "D-004");

let Uni = new University("University of Wollongong", departmentList);

departmentList.push(Dep1);
departmentList.push(Dep2);
departmentList.push(Dep3);
departmentList.push(Dep4);

// Uni.display();
// Uni.displayAllDepartment();

Uni.removeDepartment("D-001");
Uni.addDepartment("Software Department", "D-006")
