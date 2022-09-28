const employee = {
    name: 'Alex',
    streetAddress:'123 Street' ,
  };
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]:value,
        };
}

const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    'name',
    'Sam',
    'streetAddress',
    '11 Broadway'
);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}

const newestEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')

function deleteFromEmployeeByKey(obj, key) {
   return {
    delete:obj[key]
   }
}

const noName = deleteFromEmployeeByKey(
   employee,
   'name'
);

function destructivelyDeleteFromEmployeeByKey(obj,key) {
   delete obj[key]
    return obj 
   }

const byName= destructivelyDeleteFromEmployeeByKey(employee,'name')