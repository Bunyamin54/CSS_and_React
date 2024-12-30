import {useState, useEffect} from 'react';

//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

//! useEffect(() => {
//*   /* ComponentDidMount code */
//*      Kodlar
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [state1, state2]);

//! useEffect(() => {
//?   /* ComponentDidMount code */
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [state1, state2]); //? Dependency Array

//   useEffect(() => {
//     //? componentDidMount (Dependency Array bos ise)
//     //? componentDidMount + componentDidUpdate (Dependency array bos degilse)
//     //? Dependecny array'Deki state her degistiginde veya ilk render sonrasi bu kod blogu tekrardan calistirilir.

//     return () => {
//       //? Cleanup function (componentWillUnmount)
//     }
//   }, [count]) //? Dependency Array

//!   ComponentDidMount
//   useEffect(() => {
//     //! fetch, async-await ,localStorage, setTimeout, setInterval();
//     console.log("componentDidMount")
//     setTimeout(() => {
//       alert("Data fetched")
//     }, 3000)
//   }, []) //? Dependecny array bos

//!   ComponentDidUpdate
//   useEffect(() => {
//     console.log("componentDidMount + componentDidUpdate")
//     setTimeout(() => {
//       alert("Data fetched")
//     }, 3000)
//   }, [count]) //? count state'i her degistiginde yukaridaki mount+update kismi calisitirilir.

//! ComponentWillUnmount

import React from 'react';

const UseEffectHook = () => {
  const [count, setCount] = useState (0);

  // ! Component DidMount

  // useEffect(() => {

  // !  //! fetch, async-await ,localStorage, setTimeout, setInterval();

  //     console.log("componnetDidMount")
  // setTimeout(() => {
  //   alert("Data fetched")
  // }, 2000)
  // }, [])  // ? Dependecny array bos

  //!  ComponentDidUpdate
  //   useEffect(() => {

  // !  //! fetch, async-await ,localStorage, setTimeout, setInterval();

  //      console.log("componnetDidMount + componentDidUpdate")
  //  setTimeout(() => {
  //    alert("Data fetched")
  //  }, 2000)
  //  }, [count])  // ? Dependecny array bos degil ise

  // ! ComponentWillUnmount

const fetchData = () => {
  console.log("Data fetched")
}
  
useEffect(() => {
  const timer = setInterval(fetchData,5000);


  return () => {
    clearInterval(timer)
    console.log("componentWillUnmount")
  }
}, [])







  const handleInc = () => {
    setCount (count + 1); //? count state'i her degistiginde yukaridaki mount+update kismi calisitirilir.
  };

  return (
    <div className="container text-center">
      <h1 className="text-danger">LIFECYCLE METHODS</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info" onClick={handleInc}>
        INC
      </button>
    </div>
  );
};

export default UseEffectHook;
