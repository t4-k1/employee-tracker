const pool = require('../config/connection')

async function executeQuery(sql, values = []) {
  try {
    const [rows] = await pool.query(sql, values)
    return rows
  } catch (error) {
    console.error('Error executing query:', error.message)
    throw error
  }
}

async function getAllDepartments() {
  const sql = 'SELECT * FROM department'
  return await executeQuery(sql)
}

async function getAllRoles() {
  const sql = 'SELECT * FROM role'
  return await executeQuery(sql)
}

async function getAllEmployees() {
  const sql = 'SELECT * FROM employee'
  return await executeQuery(sql)
}

async function addDepartment(name) {
  const sql = 'INSERT INTO department (name) VALUES (?)'
  return await executeQuery(sql, [name])
}

async function addRole(title, salary, departmentId) {
  const sql = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)'
  return await executeQuery(sql, [title, salary, departmentId])
}

async function addEmployee(firstName, lastName, roleId, managerId) {
  const sql =
    'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)'
  return await executeQuery(sql, [firstName, lastName, roleId, managerId])
}

async function updateEmployeeRole(employeeId, roleId) {
  const sql = 'UPDATE employee SET role_id = ? WHERE id = ?'
  return await executeQuery(sql, [roleId, employeeId])
}

module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
}
