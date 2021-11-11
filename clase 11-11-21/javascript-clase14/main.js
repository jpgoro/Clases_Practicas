/* 1-
 str = "origin"
cambiar las vocales por el numero 1
  utput => 1r1g1n


=========================================================== */

let str = 'origin';
    let arr = str.split('');
    console.log(arr); 
    let output = "";
    let i=0;
    let len = arr.length;
    for(; i < len; i++){
        if (arr[i].toString().toLocaleLowerCase() == "a" || arr[i].toString().toLowerCase() == "e" || arr[i].toString().toLowerCase() == "i" || arr[i].toString().toLowerCase() == "o" || arr[i].toString().toLowerCase() == "u")
    {
            output += "1";
        }
        else{
            output+=arr[i];
        }
    }


/* 2-
 Crear una función que acepte un parámetro con los valores desde 1 hasta 5
 si valor numérico ingresado es 1 mostrar una lista del 1 al 10, si es 2 mostrar del 2 al 10,
 teniendo en cuenta el limite es 10
  posibles salidas esperadas:
  output => 1...10
  output => 2...10
  output => 3...10
  output => 4...10
  output => 5...10
=========================================================== */

function cuentaDesde(n){
    let i=n;
    for(;i<=10;i++){
        console.log(i)
    }
}
/* 3-
  arr = [10, "20", 30, "40", 50]
  verificar cada elemento sea de  tipo number y sino lo es cambiar su  tipo
  a number
  output => [10, 20, 30, 40, 50]
=========================================================== */

let arr= [10, "20", 30, "40", 50];
let i=0;
let len=arr.length;
let num=[];
for(;i<len;i++){
    if(typeof arr[i] !== 'number'){
        num[i]=parseInt(arr[i]);

    }else{
        num[i]=arr[i];
    }
} 


//=============================================================
/* 4-
 arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"]
 eliminar los elementos repetidos, nota: (el segundo elemento repetido)
 output => [2, 4, 7, 1, "foo", "bar", "qux", 3] */

let arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"];

let sinRepetir = arr.filter((item,index)=>{
    return arr.indexOf(item) === index;
})
console.log(sinRepetir);
