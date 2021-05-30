console.log(document.getElementById("productsTab"));

document.getElementById("productsTab").addEventListener("click", displayProducts);

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

    if (isLactose) array = array.filter(item => item.lactoseFree);
    if (isNut) array = array.filter(item => item.nutFree);
    if (isOrganic) array = array.filter(item => item.organic);

        array.forEach(item => {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = item.name;
                let label = document.createTextNode(" " + item.name + " ($" + item.price + ")");
                let temp = document.createElement("div");
                temp.appendChild(checkbox);
                temp.appendChild(label);
                display.appendChild(temp);

    });
}

function addToCart() {
    
}