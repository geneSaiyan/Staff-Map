export default {
    // Gets all users
    getEmployees: function() {
  
      return fetch('./employees.json');
    }
  };