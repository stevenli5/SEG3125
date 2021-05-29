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
    if (document.getElementById("lactose").checked) {
        let display = document.getElementById("products");
        products.forEach(item => {
            if (item.lactoseFree) {
                let lactoseDisplay = document.createElement("input");
                lactoseDisplay.type = "checkbox";
                lactoseDisplay.value = item.name;
                let label = document.createTextNode(" " + item.name + " ($" + item.price + ")");
                let temp = document.createElement("div");
                temp.appendChild(lactoseDisplay);
                temp.appendChild(label);
                display.appendChild(temp);
            }
        });
    }
}