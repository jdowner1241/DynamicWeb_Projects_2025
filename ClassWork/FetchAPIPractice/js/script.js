// cache html elements
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");

// cache base API URL
const apiBaseUrl = "https://dummyjson.com";

// array to store products
let allProducts = [];

// Load categories
function loadCategories() {
    fetch(`${apiBaseUrl}/products/categories`)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            if (Array.isArray(data)) {
                data.forEach(category => {
                    let categoryStr = (typeof category === "string") 
                    ? category 
                    : (category.name ? category.name : JSON.stringify(category));
                    const option = document.createElement("option");
                    option.value = (categoryStr.replace(/\s+/g, '-'));
                    console.log(option.value);
                    //option.value = (categoryStr.replace(/\s+/g, ''));
                    option.textContent = categoryStr.charAt(0).toUpperCase() + categoryStr.slice(1);
                    categorySelect.appendChild(option);
                });
            } else {
                console.error("Unexpected format format for the categories:", data);
            }
        }).catch(error => console.error("Error loading categories:", error));
}

// load all products
function loadProducts() {
    fetch(`${apiBaseUrl}/products`)
        .then(response => response.json())
        .then(data => {
            allProducts = data.products;
            displayProducts(allProducts);
        })
        .catch(error => console.error("Error loading products:", error));
}

// format products to display in grid
function displayProducts(products) {
    productGrid.innerHTML = "";
    if (!products.length) {
        productGrid.innerHTML = '<p class="text-center">No products found.</p>'
        return;
    }
    // build the product card
    products.forEach(product => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";
        col.innerHTML = `
            <div class="class product-card h-100 data-id=${product.id}">
                <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h4 class="card-title">${product.title}</h4>
                    <p class="card-text">${product.price}</p>
                </div>
            </div>
        `;
        productGrid.appendChild(col);
    });
}

// filter products based on search
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;
    let filteredProducts = allProducts;
    if (selectedCategory !== "all") {
        filteredProducts = allProducts.filter(product => product.category === selectedCategory);
    }
    if (searchTerm !== "") {
        filteredProducts = allProducts.filter(product => product.title.toLowerCase().includes(searchTerm));
    }
    displayProducts(filteredProducts);
} 

searchInput.addEventListener("input", filterProducts());
// filter products based on selected category
categorySelect.addEventListener("change", () => {
    if (categorySelect.value === 'all') {
        loadProducts();
    } else {
        fetch(`${apiBaseUrl}/products/category/${categorySelect.value}`)
            .then(reponse => reponse.json())
            .then(data => {
                allProducts = data.products;
                displayProducts(allProducts);
            })
            .catch(error => console.error("Error filtering products by category:", error));
    }
})



loadCategories();
loadProducts();