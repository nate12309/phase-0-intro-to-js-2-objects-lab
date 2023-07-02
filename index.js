let employee = { name: "John", age: 30, role: "Manager" };

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const updatedEmployee = { ...employee, [key]: value };
  return updatedEmployee;
}
function deleteFromEmployeeByKey(employee, key) {
  const employeeClone = { ...employee };
  delete employeeClone[key];
  return employeeClone;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }