//! Toggle butonuna her basildiginda true-false degisen bir state tanimladik

// toggle = !toggle
//! toggle butonuna basildiginda toggle state'nin degilini al

import React, { useState } from "react";

const UseStateObject = () => {

const [ Name, setName] = useState("John")
const [ age, setAge] = useState(30)
const [ salary, setSalary] = useState(50000)



  return (
    <div>

      <h3>USE STATE OBJECT</h3>

      <h2>Name:</h2>
      <h2>Age:</h2>
      <h2>Salary:</h2>

      <button>Change Name</button>
      <button>inc age</button>
      <button>inc salary</button>

    </div>
  );
};

export default UseStateObject;
