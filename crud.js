//The storage of employees.
const emp =
{
       Suketu: {
              name: "Suketu",
              email: "suketuashkajhk@gmail.com",
              age: 21,
              gender: "M"
       },
       Ashish: {
              name: "Ashish",
              email: "ashish@gmail.com",
              age: 21,
              gender: "M",
              id: 1
       },

}

// function for validations
const isValid = (userName, name, email, age, gender) => {
       if (emp.hasOwnProperty(userName)) {
              console.error("The username already exist please try other username");        //validates username.
              return false;
       }
       else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))                                                                          //validate name,email,age & gender.
       {
              return true;                                                                  //validates email.
       }
       else if (/^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/.test(name)) {                                                                                    //validates name.
              return true;
       }
       else if ((age < 100 && age >= 18)) {
              return true;                                                                  //validates age.
       }
       else if ((gender === "M" || gender === "F")) {                                                                                    //validates Gender.
              return true;
       }
       else {
              console.error("Unable to create , Input error");                              //prints error.
              return false;
       }

}


// To display the employee details

const display = (xyz) => {
       console.log(emp[xyz]);
}

// To create new employee

const create = (userName, Name, email, age, gender) => {
       if (isValid(userName, Name, email, age, gender)) {
              emp[userName] = {
                     name: Name,
                     email: email,
                     age: age,
                     gender: gender
              }

       }
       else {

       }
}
// To update the details for current employees.
const update = (userName, key, value) => {
       emp[userName][key] = value
       console.log(`Now ${key} is ${value}`);
}

//To delete the current employee.

const del = (userName) => {
       delete emp[userName];
}

// In order to sort the data.

const sort = () => {
       let usernameArray = Object.keys(emp);
       usernameArray.sort();
       usernameArray.forEach((item) => {
              console.log(emp[item])
       })
}
//calling the functions.
// create("Ashish", "Mustu", "aha@gmail.com", 22, "M");
// console.log(emp);
// display("Suketu");

// display("Mustafa");
// console.log(Object.keys(emp));
update("Ashish", "age", 22);
display("Ashish");
sort();
// del("Ashish");
// console.log(Object.keys(emp));
