
// Json String data
let empString = `{
  "employees": [
    { "firstName": "John", "lastName": "Doe", "age": 30, "department": "HR", "salary": 50000 },
    { "firstName": "Anna", "lastName": "Smith", "age": 27, "department": "Finance", "salary": 60000 },
    { "firstName": "Peter", "lastName": "Jones", "age": 40, "department": "IT", "salary": 75000 },
    { "firstName": "Mary", "lastName": "Johnson", "age": 35, "department": "Marketing", "salary": 55000 }
  ]
}`;

// Parse the JSON string
let empObj = JSON.parse(empString);
const empFirstName = empObj.employees.map(emp => emp.firstName);
const empLastName = empObj.employees.map(emp => emp.lastName);
const empAge = empObj.employees.map(emp => emp.age);
const empDepartment = empObj.employees.map(emp => emp.department);
const empSalary = empObj.employees.map(emp => emp.salary);

// Cache other elements
let employeeListQus1 = document.getElementById("demoEmployeeListQus1");
let sortEmployeeList = []; 

// Display the data on a ul (questions 1 a) 
let buttonQus1a = document.getElementById("btnLoadDataQus1a");
buttonQus1a.addEventListener("click", () => {
    const ul = document.createElement("ul");
    //ul.dataset.id = count++;
    
    for(let i = 0; i < empFirstName.length; i++) {
        const li = document.createElement("li");
        li.textContent = `First Name: ${empFirstName[i]}, Last Name: ${empLastName[i]}, Age: ${empAge[i]}, Department: ${empDepartment[i]}, Salary: ${empSalary[i]}`;
        ul.appendChild(li);
    }
    employeeListQus1.appendChild(ul);

    //Change button text
    buttonQus1a.textContent = "List loaded";
});

// Perform consol commands for questions 1 b.
let buttonQus1b = document.getElementById("btnConsoleQus1b");
buttonQus1b.addEventListener("click", () => {
    
    // Display employee first name and last name in console
    let nameList = empObj.employees.map(emp => emp.firstName + " " + emp.lastName);
    console.log(nameList);

    // Show total salary for all employees
    let totalSalary = empObj.employees.reduce((acc, emp) => acc + emp.salary, 0);
    alert(`Total Salary: ${totalSalary}`);

    // Show lower salary employees in console
    let higherSalary = empObj.employees.filter(emp => emp.salary > 55000);
    let higherPayingEmployees = higherSalary.map(emp => emp.firstName + " " + emp.lastName);
    console.log(higherPayingEmployees);

    // Sort employees by age in ascending order. 
    sortEmployeeList = empObj.employees.sort((a, b) => a.age - b.age);

    // recache array elements to variables of the sorted list. 
    const empFirstNameSorted = sortEmployeeList.map(emp => emp.firstName);
    const empLastNameSorted = sortEmployeeList.map(emp => emp.lastName);
    const empAgeSorted = sortEmployeeList.map(emp => emp.age);
    const empDepartmentSorted = sortEmployeeList.map(emp => emp.department);
    const empSalarySorted = sortEmployeeList.map(emp => emp.salary);

    // Display the sorted list on the ul again 
    employeeListQus1.innerHTML = "";
    const ulSorted = document.createElement("ul");
    for(let i = 0; i < empFirstNameSorted.length; i++) {
        const liSorted = document.createElement("li");
        liSorted.textContent = `First Name: ${empFirstNameSorted[i]}, Last Name: ${empLastNameSorted[i]}, Age: ${empAgeSorted[i]}, Department: ${empDepartmentSorted[i]}, Salary: ${empSalarySorted[i]}`;
        ulSorted.appendChild(liSorted);
    }
    employeeListQus1.appendChild(ulSorted);

    alert("Employees sorted by age in ascending order. Employee list updated.");

   //Change button text
    buttonQus1b.textContent = "Console Event Triggered";
});

// Perform localStorage commands for questions 1 c.
let buttonQus1c = document.getElementById("btnLocalStorageQus1c");
buttonQus1c.addEventListener("click", () => {

    // save sorted employees to localStorage
    for(let j = 0; j < sortEmployeeList.length; j++) {
        let sortEmployee = {
            id: j,
            firstName: sortEmployeeList[j].firstName,
            lastName: sortEmployeeList[j].lastName,
            age: sortEmployeeList[j].age,
            department: sortEmployeeList[j].department,
            salary: sortEmployeeList[j].salary
        };
        localStorage.setItem(sortEmployee.firstName, JSON.stringify(sortEmployee)); 
    }

    alert("employees data saved to localStorage.");

    // retrieve data from localStorage
    let retrievedEmployees = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        //console.log(`Key: ${key}, Value: ${value}`);
        retrievedEmployees.push(`Key: ${key}, Value: ${value}`);
    }
    console.log("Local Storage before removal");
    console.log(retrievedEmployees);

    // Remove specific employee from localStorage
    localStorage.removeItem("Peter");

    // retrieve data from localStorage after removal
    let retrievedEmployeesAfter = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        //console.log(`Key: ${key}, Value: ${value}`);
        retrievedEmployeesAfter.push(`Key: ${key}, Value: ${value}`);
    }
    console.log("Local Storage after removal");
    console.log(retrievedEmployeesAfter);
    alert("Peter removed from localStorage.");
    
    // Clear localStorage
    localStorage.clear();
    alert("localStorage cleared.");

    //Change button text
    buttonQus1c.textContent = "Data Cleared";
});