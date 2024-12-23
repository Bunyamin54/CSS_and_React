//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react
//* =============================================================

import React, { useState } from 'react'


const UseStateCounter = () => {
    // let count = 0   ;


     //* count adinda bir state tanimlamis olduk ve baslangic degeri 0 atadik 

    const [count, setCount] = useState(0)

    const handleInc= () => {
        // count  = count + 1

          //* Bir statetin degeri sadece setter methodu ile olabilir. 
          
    setCount(count + 1)

        console.log(count)
    }
  return (
    <div>
      <h2>USE STATE HOOK</h2>
        <h1>Count:{count}</h1>
        <button  onClick={handleInc}> INC</button>
        <button onClick={() => setCount(0)} >CLR</button>

         {/*  */}
        <button onClick={ () => setCount(count -1 )} >DEC</button>
      </div>
   
  )
}

export default UseStateCounter
