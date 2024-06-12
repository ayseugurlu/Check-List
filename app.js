const waren = [
  {
    name: "BOSCH WQB245B40 Wärmepumpentrockner Serie",
    price: 839.99,
    product: "Trockner",
    id: "1",
  },
  {
    name: "BOSCH WGB254030 Waschmaschine (10 kg, 1400 U/Min., A)",
    price: 829.99,
    product: "Waschmaschine",
    id: "2",
  },
  {
    name: "BOSCH WQB245B40 Wärmepumpentrockner Serie",
    price: 79.99,
    product: "Zwischenbaurahmen",
    id: "3",
  },
];

//^ Constants

const FREE_SHIPPING = 3000;
const SHIPPING_PRICE = 25.99;
const MWST = 0.18;

//^Selectors
const deleteAllButton = document.querySelector(".delete .fa-trash-can");
const products = document.querySelector(".container");
// console.log(products.classList)

//^ Variables
let total = 0;
let subtotal = 0;

//^Event Listener

deleteAllButton.addEventListener("click", () => {
  products.textContent = "Einkaufswagen ist leer.";
  products.classList.add("no-product");
  // console.log(products.classList)
  document.querySelector(".delete").remove();
  calcTotal()
});

products.addEventListener("click", (e) => {
  // console.log(e.target)

  if (e.target.classList.contains("fa-square-plus")) {
    e.target.previousElementSibling.textContent++;
    calSubtotal(e.target);
    calcTotal();
  } else if (e.target.classList.contains("fa-square-minus")) {
    if (e.target.nextElementSibling.textContent > 1) {
      e.target.nextElementSibling.textContent--;
      calSubtotal(e.target);
    }
  } else if (e.target.classList.contains("fa-trash-can")) {
    e.target.closest(".card").remove();

    // console.log(e.target.classList);
    // console.log(products.children);
    if (products.children.length == 1) {
      products.textContent = "Einkaufswagen ist leer";
      
    }calcTotal()
  }
});

//^ Functions

const calSubtotal = (btn) => {
  const productId = btn.closest(".pieces").previousElementSibling.id;
  const product = waren.find((item) => item.id === productId);
  const piece = btn.parentNode.querySelector(".piece").textContent;

  if (product) {
    const discountedPrice = product.price;
    const sum = btn.closest(".pieces").querySelector(".sum");
    subtotal = (discountedPrice * piece).toFixed(2);
    sum.textContent =Number(subtotal) ;

    
  }calcTotal();
};

const calcTotal = () => {
  const totalSelected = document.querySelector("#total-selected");
  totalSelected.style.fontWeight="600"
  const sumElelments = document.querySelectorAll(".sum");
  console.log(sumElelments);
  total = [...sumElelments].reduce((acc, sumElement) => acc + Number(sumElement.textContent),0);
  console.log(total)
  totalSelected.textContent = total.toFixed(2) +' €'

  const shippingPrice=document.getElementById('shipping-price')
    const mwstPrice=document.getElementById('mwst-price')
    const totalPrice=document.getElementById('total-price')

  if(total >= FREE_SHIPPING){

    
    const  totalEndPrice = ( total + total*MWST ).toFixed(2)
    shippingPrice.textContent = 0
    mwstPrice.textContent = ( total * MWST ).toFixed(2)
    totalPrice.textContent = totalEndPrice
    
  }else if(total < FREE_SHIPPING && total>0){
    const totalEndPrice= ( total + total * MWST + SHIPPING_PRICE ).toFixed(2)
    shippingPrice.textContent = SHIPPING_PRICE
    mwstPrice.textContent = ( total * MWST ).toFixed(2)
    totalPrice.textContent = totalEndPrice
  }
};

window.addEventListener("load", ()=>{
    calcTotal()
})


