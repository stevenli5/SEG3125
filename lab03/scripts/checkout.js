let cart = [];

/* 10 products */
let products = [
    {
        name: "Cookie",
        lactoseFree: false,
        nutFree: false,
        organic: false,
        price: 0.99,
        image: "../lab03/images/cookie.png"
    },
    {
        name: "Skittles",
        lactoseFree: true,
        nutFree: true,
        organic: false,
        price: 1.29,
        image: "../lab03/images/skittles.png"
    },
    {
        name: "Cheese",
        lactoseFree: false,
        nutFree: true,
        organic: true,
        price: 1.97,
        image: "../lab03/images/cheese.png"
    },
    {
        name: "Peanuts",
        lactoseFree: true,
        nutFree: false,
        organic: true,
        price: 1.97,
        image: "../lab03/images/peanuts.png"
    },
    {
        name: "Bread",
        lactoseFree: false,
        nutFree: true,
        organic: true,
        price: 1.99,
        image: "../lab03/images/bread.png"
    },
    {
        name: "Yogurt",
        lactoseFree: false,
        nutFree: true,
        organic: false,
        price: 2.49,
        image: "../lab03/images/yogurt.png"
    },
    {
        name: "Mushrooms",
        lactoseFree: true,
        nutFree: true,
        organic: true,
        price: 2.67,
        image: "../lab03/images/mushrooms.png"
    },
    {
        name: "Avocados",
        lactoseFree: true,
        nutFree: true,
        organic: true,
        price: 2.97,
        image: "../lab03/images/avocados.png"
    },
    {
        name: "Honey",
        lactoseFree: true,
        nutFree: true,
        organic: true,
        price: 3.49,
        image: "../lab03/images/honey.png"
    },
    {
        name: "Regular Milk",
        lactoseFree: false,
        nutFree: true,
        organic: false,
        price: 4.97,
        image: "../lab03/images/regularMilk.png"
    }
]

function back() {
    if (document.getElementById('content2').style.display === "block") {
        document.getElementById('content2').style.display = "none";
        document.getElementById('content1').style.display = "block";
        document.getElementById("back").style.visibility = "hidden";
        document.getElementById("productsTab").style.boxShadow = "none";
        document.getElementById("dataTab").style.boxShadow = "0 8px 16px 0 rgba(61, 138, 63, 1.5)";
    } else if (document.getElementById('content3').style.display === "block") {
        document.getElementById('content3').style.display = "none";
        document.getElementById('content2').style.display = "block";
        displayProducts();
        document.getElementById("next").style.visibility = "visible";
        document.getElementById("cartTab").style.boxShadow = "none";
        document.getElementById("productsTab").style.boxShadow = "0 8px 16px 0 rgba(61, 138, 63, 1.5)";
    }
}

function next() {
    let missing = document.getElementById("missing");

    if (document.getElementById('content1').style.display === "block") {
        if (submit()) {
            document.getElementById('content1').style.display = "none";
            document.getElementById('content2').style.display = "block";
            displayProducts();
            document.getElementById("back").style.visibility = "visible";
            document.getElementById("dataTab").style.boxShadow = "none";
            document.getElementById("productsTab").style.boxShadow = "0 8px 16px 0 rgba(61, 138, 63, 2)";
        } else {
            missing.innerHTML = "Please indicate all dietary restrictions and preferences.";
            setTimeout(function () { missing.innerHTML = ""; }, 5000);
        }
    } else if (document.getElementById('content2').style.display === "block") {
        document.getElementById('content2').style.display = "none";
        document.getElementById('content3').style.display = "block";
        displayCart();
        document.getElementById("next").style.visibility = "hidden";
        document.getElementById("productsTab").style.boxShadow = "none";
        document.getElementById("cartTab").style.boxShadow = "0 8px 16px 0 rgba(61, 138, 63, 1.5)";
    }
}

function submit() {
    let counter = 0;
    let lactose = document.getElementsByName("lactose");
    let nut = document.getElementsByName("nut");
    let organic = document.getElementsByName("organic");
    let missing = document.getElementById("missing");

    for (let i = 0; i < lactose.length; i++) {
        if (lactose[i].checked) {
            counter++;
        }
    }
    for (let j = 0; j < nut.length; j++) {
        if (nut[j].checked) {
            counter++;
        }
    }
    for (let k = 0; k < organic.length; k++) {
        if (organic[k].checked) {
            counter++;
        }
    }
    if (counter === 3) {
        return true;
    } else {
        return false;
    }
}

function displayProducts() {
        document.getElementById("products").innerHTML = "";
        let isLactose = document.getElementById("isLactose").checked;
        let isNut = document.getElementById("isNut").checked;
        let isOrganic = document.getElementById("isOrganic").checked;
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
            img.className = "image";
            console.log(img);
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
            setTimeout(function () { added.innerHTML = ""; }, 1000);
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
            document.getElementById("checkoutButton").style.visibility = "visible";
        }
}

function clearCart() {
    cart = [];
    displayCart();
    document.getElementById("checkoutButton").style.visibility = "hidden";
}

function checkout() {
    let thankYou = document.getElementById("thankYou");
    thankYou.innerHTML = "Thank you for shopping at Steven's Corner Shop!";
    setTimeout(function () { thankYou.innerHTML = ""; }, 4000);
    clearCart();
}