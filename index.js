// Write your solution in this file!
const employee = {
    name: 'name1',
    address: 'address1',
};
// wrtie these 4 functions
/* this function should take in three 
arguments: an employee Object, 
a key and a value. This function should 
not mutate the employee; it should return 
a new Object that has an updated value
 for the key passed in. 
 Hint: use the spread operator!*/
function updateEmployeeWithKeyAndValue(obj, key, value) {
    //return Object.assign({}, obj, {[key]: value});
    return {...obj, [key] : value};
};

/*this function should work the same as 
updateEmployeeWithKeyAndValue() but it should 
mutate the employee Object passed in. */
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
   // const newEmployee = obj;
    obj[key] = value;
    return obj;
};

/*this function should take in a employee Object
 and a key. It should delete the property with 
 that key from the employee Object.
  This should not mutate the original 
  employee Object; it should return a 
  new Object that doesn't include 
  the identified key-value pair. 
  Hint: use the spread operator! */
  function deleteFromEmployeeByKey(obj, key) {
     const newObj = {...obj};
     delete newObj[key];
     return newObj;
  };

  /*this function should work the same 
    as deleteFromEmployeeByKey() 
   but it should mutate the employee Object. */
   function destructivelyDeleteFromEmployeeByKey(obj, key) {
    //    const newObj = obj[key];
    //    delete newObj[key];
    //    return newObj;
       delete obj[key];
       return obj;
   };
