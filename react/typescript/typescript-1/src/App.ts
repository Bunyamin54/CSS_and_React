
//* Typ annotation
let x: number = 5;
let y = "Hello World";

y = X = 10;  


// stig beklerken integer gonderiliyor bunu uyariyor. 

let z ; 

//* cikarimda any diye bulunuyor ve degisikliklere izin veriyor any olursa java scripten farki kalmiyor.

z = false;
z = 10;
z = "Hello World";


//* Array in typescript birden fazla tip alabilir.

let arr: number[] = [1,2,3,4,5];

let array : string [] = ["Hello", "World"];

array.push(4); 

//* gecersi veri atanmasina izin vermiyor. 

let b = []

//* any typinde oldugu icin her turlu veri alabilir.

b.push(1);
b.push["Hello"];


 //* Tuples strcuturunu kullanarak array olusturabiliriz. 2. bir deger belirleyebiliriz.


 let myTuple : [ number, boolean, string];


 myTuple = [1, true, "Hello"];

 myTuple = [1, "Hello", true]; // * hata verir.  cunku sirayla olmasi gerekiyor.  abit sayida sabit tiplerde array olusturabiliriz.

  //* Tuple array

 let arrTuples: [number,string][] ;
 
 arrTuples = [[1, "Hello"], [2, "Worls"], [3, "Typescript"]];


 arrTuples.push ([4,"React"])


 //* Enum 
 //* herhangi bir  iki nokta vs yok   
 //* const kullninca karmasiklik ortadan kalkiyor kodda 

//  enum Colors {
//      RED ,
//      GREEN ,
//      BLUE
//  }

const enum Color {
    Red ,
    Green  = 100,
    Blue =Green + 5,
    Yellow  
}

console.log(Color.Green)
console.log(Color.Blue)
console.log(Color.Yellow)

//* Enum string olarakta tanimlanabilir.  stringde deger vermek zorundayiz

const enum Tshirt {
    Small = "S",
    Medium = "M",
    Large = "L"
}

console.log(Tshirt.Small)

//* Mix enum

const enum Mixed {
    Red,
    Green,
    Blue = "Mavi",
    Yellow = "sari",
    Magenta = 5,
    Brown, 
}

//* Any unknown 

 let a : any = 10;

 let c : number = 20;   


 let d : unknown = 4;


let f : number = d as number; // * as ile tip donusumu yapabiliriz.


//* Void fonksiyon donus tipi 

function hello() : void {
    console.log("Hello World");
}

//* return ozelligi olmayan fonksiyonlarda void kullanilir.

//* never fonksiyonun hicbir zaman bitmeyecegini belirtir.

function error(message: string) : never {
    throw new Error(message);
}


//* Type Aliases  kisa yol olusturmamizi saglar.

type check = string | number
let t : check
t = 10;
t = "Hello World";
t = false  // * hata verir cunku string ve number alabilir. boolean alamaz.


let u : check = 20;

//* String literal types  degiskenin alacagi degeri belirler. 

type Car = "BMW" | "Mercedes" | "Audi";

let car1 : Car = "BMW";
let car2 : Car = "Mercedes";
let car3 : Car = "Honda"; // * hata verir cunku sadece BMW, Mercedes, Audi alabilir.


//? Intersection - Birlesim  & ile birlesim yapilir.

 //* Object types

 const araba : {

    make :string,
    model: string,
    readonly year: number,  //* readonly ile degistirilemez yapilir.
    sunfoof?: boolean  // * ? ile istege bagli yapilir.  yoksa asagida bielirtmemiz lazm sunroof : false gibi.
 } = {

      make: "BMW",
        model: "X5",
        year: 2021,
 }

 araba.year = 2022; //* hata verir cunku readonly oldugu icin degistirilemez.

 //* Intersection  &  2 type birlestiryorz ve birlesimini olusturuyoruz.

 type Book = {

    book_id: number,
    book_name: string,
 }

 type Author = {    
    
        author_id?: number,
        author_name: string,
 }

 type Intersection_type = Book & Author;

    let book : Intersection_type = {
    
        book_id: 1234,
        book_name: "Typescript",
        author_id: 1,
        author_name: "John"
    }



    // * Type Assertions as ile tip donusumu yapilir.  

    let someValue : unknown = "Hello World";

    console.log ((someValue as string).length); // * as ile tip donusumu yapilir.

    //* Function Types 

    //*  optional parametreler ? ile belirtilir.

    function selamla(greet:string, name:string): string{if (!name) name = "User"

  return `${greet} ${name}`;

    } 

    //* optional parametreler ? ile belirtilir.


    selamla("Hello", "John");   //* Hello John
    selamla("Hello");  //* Hello User hata aldik cunku name parametresi zorunlu.
    selamla("Hello", "John", "Doe");  //* Hello John Doe  hata vermez cunku 3. parametre optionaldir.