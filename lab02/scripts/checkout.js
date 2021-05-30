document.getElementById("productsTab").addEventListener("click", displayProducts);
document.getElementById("cartTab").addEventListener("click", displayCart);

let cart = [];

let products = [
    {
        name: "Cookie",
        lactoseFree: false,
        nutFree: false,
        organic: false,
        price: 0.99
    },
    {
        name: "Skittles",
        lactoseFree: true,
        nutFree: true,
        organic: false,
        price: 1.29
    },
    {
        name: "Cheese",
        lactoseFree: false,
        nutFree: true,
        organic: true,
        price: 1.97
    },
    {
        name: "Peanuts",
        lactoseFree: true,
        nutFree: false,
        organic: true,
        price: 1.97
    },
    {
        name: "Bread",
        lactoseFree: false,
        nutFree: true,
        organic: true,
        price: 1.99
    },
    {
        name: "Mushrooms",
        lactoseFree: true,
        nutFree: true,
        organic: true,
        price: 2.49
    },
    {
        name: "Yogurt",
        lactoseFree: false,
        nutFree: true,
        organic: false,
        price: 2.49
    },
    {
        name: "Avocado",
        lactoseFree: true,
        nutFree: true,
        organic: true,
        price: 2.97
    },
    {
        name: "Honey",
        lactoseFree: true,
        nutFree: false,
        organic: true,
        price: 3.49
    },
    {
        name: "Regular Milk",
        lactoseFree: false,
        nutFree: true,
        organic: false,
        price: 4.97
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
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = item.name;
        checkbox.className = "groceries";
        let label = document.createTextNode(" " + item.name + " ($" + item.price + ")");
        let temp = document.createElement("div");
        temp.appendChild(checkbox);
        temp.appendChild(label);
        display.appendChild(temp);
    });
}

function addToCart() {
    let groceries = document.getElementsByClassName("groceries");
    for (let i = 0; i < groceries.length; i++) {
        if (groceries[i].checked) {
            for (let j = 0; j < products.length; j++) {
                if (groceries[i].value === products[j].name) {
                    cart.push(products[j]);
                }
            }
        }
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
            li.innerHTML = item.name + " ($" + item.price + ")";
            ul.appendChild(li);
            total += item.price;
        });
        display.appendChild(ul);
        let p = document.createElement("p");
        p.innerHTML = "Your total is $" + total;
        p.className = "text-bold";
        display.appendChild(p);
        display.append("Thank you for shopping at Steven's Corner Shop!")
    }

}