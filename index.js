const inquirer = require('inquirer')
const {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require('./utils/queries')

// display main menu and handle user input
async function mainMenu() {
  try {
    const { choice } = await inquirer.prompt({
      name: 'choice',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    })

    switch (choice) {
      case 'View all departments':
        await viewAllDepartments()
        break
      case 'View all roles':
        await viewAllRoles()
        break
      case 'View all employees':
        await viewAllEmployees()
        break
      case 'Add a department':
        await promptAddDepartment()
        break
      case 'Add a role':
        await promptAddRole()
        break
      case 'Add an employee':
        await promptAddEmployee()
        break
      case 'Update an employee role':
        await promptUpdateEmployeeRole()
        break
      case 'Exit':
        console.log('Exiting application.')
        process.exit()
    }
  } catch (error) {
    console.error('Error:', error.message)
  }
}

// display all departments
async function viewAllDepartments() {
  const departments = await getAllDepartments()
  console.table(departments)
  mainMenu()
}

// display all roles
async function viewAllRoles() {
  const roles = await getAllRoles()
  console.table(roles)
  mainMenu()
}

// display all employees
async function viewAllEmployees() {
  const employees = await getAllEmployees()
  console.table(employees)
  mainMenu()
}

// prompt user to add department
async function promptAddDepartment() {
  const { name } = await inquirer.prompt({
    name: 'name',
    type: 'input',
    message: 'Enter the name of the department:',
  })

  await addDepartment(name)
  console.log('Department added successfully!')
  mainMenu()
}

// prompt user to add role
async function promptAddRole() {
  const departments = await getAllDepartments()
  const departmentChoices = departments.map((department) => ({
    name: department.name,
    value: department.id,
  }))

  const { title, salary, departmentId } = await inquirer.prompt([
    {
      name: 'title',
      type: 'input',
      message: 'Enter the title of the role:',
    },
    {
      name: 'salary',
      type: 'number',
      message: 'Enter the salary for the role:',
    },
    {
      name: 'departmentId',
      type: 'list',
      message: 'Select the department for the role:',
      choices: departmentChoices,
    },
  ])

  await addRole(title, salary, departmentId)
  console.log('Role added successfully!')
  mainMenu()
}

// prompt user to add employee
async function promptAddEmployee() {
  const roles = await getAllRoles()
  const roleChoices = roles.map((role) => ({
    name: role.title,
    value: role.id,
  }))

  const employees = await getAllEmployees()
  const employeeChoices = employees.map((employee) => ({
    name: `${employee.first_name} ${employee.last_name}`,
    value: employee.id,
  }))

  employeeChoices.unshift({ name: 'None', value: null })

  const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
    {
      name: 'firstName',
      type: 'input',
      message: 'Enter the first name of the employee:',
    },
    {
      name: 'lastName',
      type: 'input',
      message: 'Enter the last name of the employee:',
    },
    {
      name: 'roleId',
      type: 'list',
      message: 'Select the role for the employee:',
      choices: roleChoices,
    },
    {
      name: 'managerId',
      type: 'list',
      message: 'Select the manager for the employee:',
      choices: employeeChoices,
    },
  ])

  await addEmployee(firstName, lastName, roleId, managerId)
  console.log('Employee added successfully!')
  mainMenu()
}

// update employee role
async function promptUpdateEmployeeRole() {
  const employees = await getAllEmployees()
  const employeeChoices = employees.map((employee) => ({
    name: `${employee.first_name} ${employee.last_name}`,
    value: employee.id,
  }))

  const roles = await getAllRoles()
  const roleChoices = roles.map((role) => ({
    name: role.title,
    value: role.id,
  }))

  const { employeeId, roleId } = await inquirer.prompt([
    {
      name: 'employeeId',
      type: 'list',
      message: 'Select the employee to update:',
      choices: employeeChoices,
    },
    {
      name: 'roleId',
      type: 'list',
      message: 'Select the new role for the employee:',
      choices: roleChoices,
    },
  ])

  await updateEmployeeRole(employeeId, roleId)
  console.log('Employee role updated successfully!')
  mainMenu()
}

mainMenu()
