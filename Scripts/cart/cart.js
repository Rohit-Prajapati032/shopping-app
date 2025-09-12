window.addEventListener('load', () => {
    const productData = JSON.parse(localStorage.getItem('selectedProduct'));

    if (productData) {
        displayProduct(productData);
    } else {
        // Redirect back if no data
        window.location.href = 'index.html';
    }
});

function displayProduct(product) {
    const container = document.querySelector('#productDetail');  // Use appropriate selector
container.innerHTML  = `
                        <div class="row" id="">

            <!-- print the Products -->
            <div class="col-sm-12 col-md-6 col-lg-6 col-12 productImageInfo">
                <div class ="p-2  imageDiv d-flex justify-content-center">
                <img src="${product.image}" alt="${product.title}" class = "productImage">
                </div>
                <div class=" d-flex gap-5 mt-2 productBtnDiv">
                    <button class="btn btn-primary btnProduct" type="submit">Add Cart</button>
                    <button class="btn btn-primary btnProduct" type="submit">Buy Now</button>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 col-12 d-flex gap-4 flex-column productInfos">
                <div class="border p-2 ">
                    <p  class = "text-secondary">${product.title}</p>
                    <p class = "text-secondary"> &#8377; ${product.price}</p>
                    <div class = "text-secondary d-flex gap-2">
                    <p class = "rating">${product.rating.rate} &#9733;</p>
                    <p> Review ${product.rating.count} </p>
                     </div> 
                    <p class = "text-secondary">Free Delivery</p>
                </div>

                <div class="border  p-2">
                    <p>Select Size</p>
                    <div class = "d-flex gap-3" >
                        <button class="p-2 product-sizeBtn">XS</button>
                        <button class="p-2 product-sizeBtn">S</button>
                        <button class="p-2 product-sizeBtn">M</button>
                        <button class="p-2 product-sizeBtn">L</button>
                        <button class="p-2 product-sizeBtn">XL</button>
                        <button class="p-2 product-sizeBtn xxl">XXL</button>
                        <button class="p-2 product-sizeBtn xxxl">XXXL</button>
                    </div>
                </div>
                <div class="border   p-3">
                <p class = "mb-2">Product Details</p>
                    <p class = "mt-2">${product.description || "No description available."}</p>
                </div>
            </div>
        </div>
`;







// container.innerHTML = `<div class="container my-5">
//   <div class="row justify-content-center">
//     <div class="col-md-10 col-lg-8">
//       <div class="card shadow-lg p-4 product-detail-card">
//         <img src="${product.image}" alt="${product.title}" class="card-img-top product-detail-image mb-4" />
//         <div class="card-body">
//           <h2 class="card-title h4">${product.title}</h2>
//           <p class="card-text"><strong>Price:</strong> ₹${product.price}</p>
//           <p class="card-text"><strong>Rating:</strong> ${product.rating.rate} ⭐</p>
//           <p class="card-text"><strong>Reviews:</strong> ${product.rating.count}</p>
//           <p class="card-text"><strong>Description:</strong> ${product.description || "No description available."}</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// `

  
}