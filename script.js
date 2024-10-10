const products = [];

document.getElementById('productForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const category = document.getElementById('category').value;

    const newProduct = { name, price, category };
    products.push(newProduct);

    const duplicatedProducts = [...products, { name: 'Producto Duplicado', price: 50, category: 'Ejemplo' }];
    renderProducts(duplicatedProducts);
});

function renderProducts(productList) {
    const productListElement = document.getElementById('productList');
    productListElement.innerHTML = '';

    productList.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price.toFixed(2)} - ${product.category}`;
        productListElement.appendChild(li);
    });
}

function filterByCategory(category, ...productsToFilter) {
    return productsToFilter.filter(product => product.category === category);
}