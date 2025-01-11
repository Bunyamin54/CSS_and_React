
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

 let arrTuples ; [number,string][] ;
 
 arrTuples = [[1, "Hello"], [2, "Worls"], [3, "Typescript"]];


 arrTuples.push ([4,"React"])