const products=[
    {
    name:"BOSCH WQB245B40 Wärmepumpentrockner Serie",
    price:839.99,
    product:"Trockner"
    },
    {
    name:"BOSCH WGB254030 Waschmaschine (10 kg, 1400 U/Min., A)",
    price:829.99,
    product:"Waschmaschine"
    },
    {
    name:"BOSCH WQB245B40 Wärmepumpentrockner Serie",
    price:79.99,
    product:"Zwischenbaurahmen"
    }

]

const minus=document.querySelector(".minus")
const plus=document.querySelector(".plus")
const trash=document.querySelector(".trash")
const sum=document.querySelector(".sum")
let totalSelected=document.querySelector(".total-selected")
const piece=document.querySelector(".piece")

console.log(minus)
console.log(products[0].price)



//& Variables
let total;
let subtotal;

function updateDisplay(){
    sum.textContent +=subtotal
    totalSelected.textContent +=total

}

plus.onclick=()=>{
    piece.textContent++;
    subtotal += products.forEach((product)=>console.log(product[0].price))

    updateDisplay()
}

