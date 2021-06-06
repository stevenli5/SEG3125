document.getElementById("productsTab").addEventListener("click", displayProducts);
document.getElementById("cartTab").addEventListener("click", displayCart);

let cart = [];

/* 10 products */
let products = [
    {
        name: "Cookie",
        lactoseFree: false,
        nutFree: false,
        organic: false,
        price: 0.99,
        image: "../images/favicon.png"
    },
    {
        name: "Skittles",
        lactoseFree: true,
        nutFree: true,
        organic: false,
        price: 1.29,
        image: "../images/favicon.png"
    },
    {
        name: "Cheese",
        lactoseFree: false,
        nutFree: true,
        organic: true,
        price: 1.97,
        image: "../images/favicon.png"
    },
    {
        name: "Peanuts",
        lactoseFree: true,
        nutFree: false,
        organic: true,
        price: 1.97,
        image: "../images/favicon.png"
    },
    {
        name: "Bread",
        lactoseFree: false,
        nutFree: true,
        organic: true,
        price: 1.99,
        image: "../images/favicon.png"
    },
    {
        name: "Yogurt",
        lactoseFree: false,
        nutFree: true,
        organic: false,
        price: 2.49,
        image: "../images/favicon.png"
    },
    {
        name: "Mushrooms",
        lactoseFree: true,
        nutFree: true,
        organic: true,
        price: 2.67,
        image: "../images/favicon.png"
    },
    {
        name: "Avocados",
        lactoseFree: true,
        nutFree: true,
        organic: true,
        price: 2.97,
        image: "../images/favicon.png"
    },
    {
        name: "Honey",
        lactoseFree: true,
        nutFree: true,
        organic: true,
        price: 3.49,
        image: "../images/favicon.png"
    },
    {
        name: "Regular Milk",
        lactoseFree: false,
        nutFree: true,
        organic: false,
        price: 4.97,
        image: "../lab03/images/favicon.png"
    }
]

function displayProducts() {
    document.getElementById("products").innerHTML = "";
    let isLactose = document.getElementById("lactose").checked;
    let isNut = document.getElementById("nut").checked;
    let isOrganic = document.getElementById("organic").checked;
    let display = document.getElementById("products");

    let array = [...products];

    if (isLactose) {
        array = array.filter(item => item.lactoseFree);
    }
    if (isNut) {
        array = array.filter(item => item.nutFree);
    }
    if (isOrganic) {
        array = array.filter(item => item.organic);
    }

    array.forEach(item => {
        let img = document.createElement("img");
        img.src = item.image;
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = item.name;
        checkbox.className = "groceries";
        let label = document.createTextNode(" " + item.name + " - $" + item.price);
        let temp = document.createElement("div");
        temp.appendChild(checkbox);
        temp.appendChild(label);
        temp.appendChild(img);
        display.appendChild(temp);
    });
}

function addToCart() {
    let groceries = document.getElementsByClassName("groceries");
    let added = document.getElementById("added");
    let s4f1 = false;

    for (let i = 0; i < groceries.length; i++) {
        if (groceries[i].checked) {
            s4f1 = true;
            for (let j = 0; j < products.length; j++) {
                if (groceries[i].value === products[j].name) {
                    cart.push(products[j]);
                }
            }
        }
    }
    if (s4f1) {
        added.innerHTML = "Added to cart!";
        setTimeout(function(){ added.innerHTML = ""; }, 1000);
    }
}

function displayCart() {
    document.getElementById("cart").innerHTML = "";
    let display = document.getElementById("cart");

    if (cart.length == 0) {
        display.innerHTML = "Your cart is empty.";
    } else {
        let ul = document.createElement("ul");
        ul.className = "bullet-none";
        let total = 0;
        cart.forEach(item => {
            display.innerHTML = "You have selected:"
            let li = document.createElement("li");
            li.innerHTML = item.name + " - $" + item.price;
            ul.appendChild(li);
            total += item.price;
        });
        display.appendChild(ul);
        let p = document.createElement("p");
        p.innerHTML = "Your total is $" + total.toFixed(2);
        p.className = "text-bold";
        display.appendChild(p);
        display.append("Thank you for shopping at Steven's Corner Shop!");
        document.getElementById("checkoutButton").style.visibility = "visible";
    }
}

function clearCart() {
    cart = [];
    displayCart();
    document.getElementById("checkoutButton").style.visibility = "hidden";
}

function checkout() {
    alert("Item(s) have been purchased. Thank you!");
    clearCart();
}