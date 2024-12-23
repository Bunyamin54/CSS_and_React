//! Toggle butonuna her basildiginda true-false degisen bir state tanimladik

// toggle = !toggle
//! toggle butonuna basildiginda toggle state'nin degilini al

import React, {useState} from 'react';

const UseStateObject = () => {
  // const [ name, setName] = useState("John")
  // const [ age, setAge] = useState(30)
  // const [ salary, setSalary] = useState(50000)

  const [kisi, setKisi] = useState ({
    name: 'Kemal',
    age: 21,
    salary: 10000,
  });

    const [toggle, setToggle] = useState("true")

  // let toggle = false;

  const handleToggle = () => {
    // toggle = !toggle;
    setToggle(!toggle);

    if (toggle) {
      setKisi ({name: 'Mehmet Kan', age: 25, salary: 20000});
    } else {
      setKisi ({name: 'Kemal', age: 21, salary: 10000});
    }
  };

  return (
    <div>

      <h3>USE STATE OBJECT</h3>

      <h2>Name:{kisi.name}</h2>
      <h2>Age:{kisi.age}</h2>
      <h2>Salary:{kisi.salary}</h2>
      {/* 
      <button onClick={() => setName("Hasan")}>Change Name</button>
      <button onClick={() => setAge (age +1)}>inc age</button>
      <button onClick={() => setSalary (salary + 5000)}>inc salary</button> */}

      <button onClick={() => setKisi ({...kisi, name: 'Mehmet Kan'})}>
        Change Name
      </button>
      <button onClick={() => setKisi ({...kisi, age: kisi.age + 1})}>
        inc age
      </button>
      <button onClick={() => setKisi ({...kisi, salary: kisi.salary + 3000})}>
        ing salary
      </button>

      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default UseStateObject;
