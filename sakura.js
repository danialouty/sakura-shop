

function correctpass(){
    let n=document.getElementById("pass1").value;
    let x=document.getElementById("pass2").value;
    if( n!=x){
        alert("The password Doesn't mach");
    }
   else{
    window.location.href ='./login.html';
   }
}
function fields(){
    let n=document.getElementById("pass1").value;
    let x=document.getElementById("pass2").value;
    let z=document.getElementById("field").value;
    if( n=="" || x=="" || z==""){
        alert("YOU SHOULD FILL ALL THE FIELDS");
    }

   else{
    window.location.href ='./login.html';
   }
   
}
function addToCart(price) {
    let cart = localStorage.getItem('cart') || '';
    if (cart) {
        cart += `,${price}`;
    } else {
        cart = `${price}`;
    }
    localStorage.setItem('cart', cart);
    
    alert('Item added to cart! ❀');
}

function clearCart() {
    localStorage.removeItem('cart');
}

document.addEventListener('DOMContentLoaded', () => {
    let cart = localStorage.getItem('cart') || '';
    let cartItems = cart ? cart.split(',').map(Number) : [];
    let totalPrice = cartItems.reduce((total, price) => total + price, 0);
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
    const cartItemsList = document.getElementById('cart-items');
    cartItems.forEach((price, index) => {
        const li = document.createElement('li');
        li.textContent = `Item ${index + 1}: $${price}`;
        cartItemsList.appendChild(li);
    });
});

function clearCartAndRefresh() {
    localStorage.removeItem('cart');
    window.location.reload();
}

function buy(){
    alert("Done❀ദ്ദി ˉ͈̀꒳ˉ͈́ )✧");
}
