class Department {
//   name: string;
  employees: string[] = [];

  constructor(private readonly id: string, public name: string, ) {
    // this.name = name;
  }

  describe(this: Department) {
    console.log("Department " + this.id + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

const schoenen = new Department('12', "schoenen");
const schoenenCopy = { name: "DUMMY", describe: schoenen.describe };

console.log(schoenen);

schoenen.describe();
// schoenenCopy.describe();    

schoenen.employees[0] = 'Dessy'
console.log(schoenen.employees)


