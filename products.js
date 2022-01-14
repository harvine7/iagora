fetch('products.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function appendData(data) {
    var mainContainer = document.getElementById("myproducts");
    for (var i = 0; i < data.products.length; i++) {
        var div = document.createElement("div");
        div.className = 'mb-4 col-lg-3 col-6'
        div.innerHTML =
            '<div class="card">' +
                '<img src=' + data.products[i].product_image + '>' +
                '<div class="product-text">' +
                    '<h4 class="product-name"><b>' + data.products[i].product_name + '</b></h4>' +
                    '<p class="product-price"><b> Rp. ' + data.products[i].product_price.toLocaleString() + '&nbsp;' + data.products[i].product_uom + '</b>' +
                '</div>'
            '</div>'
        mainContainer.appendChild(div);
    }
}