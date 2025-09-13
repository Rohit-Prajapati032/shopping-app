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
    const rowContainer = document.querySelector('#productDetail');
    // Use appropriate selector
    //  first colomn in row 
    //  create a colomn 
    const imageCol = document.createElement('div');
    imageCol.className = 'col-sm-12 col-md-6 col-lg-6 col-12 productImageInfo';
    //create imageDiv 
    const imageDiv = document.createElement('div');
    imageDiv.className = 'p-2  imageDiv d-flex justify-content-center';

    const productImage = document.createElement('img');
    productImage.className = 'productImage';
    productImage.src = product.image;
    product.alt = product.title;
    imageDiv.appendChild(productImage);
    //create a BtnDiv 
    const btnDiv = document.createElement('div');
    btnDiv.className = 'd-flex gap-5 mt-2 productBtnDiv';
    imageDiv.appendChild(btnDiv);


    const addBtn = document.createElement('btn');
    addBtn.className = 'btn btn-primary btnProduct';
    addBtn.innerText = 'Add Cart';


    const buyBtn = document.createElement('btn');
    buyBtn.className = 'btn btn-primary btnProduct';


    buyBtn.innerText = 'Buy Now';
    btnDiv.appendChild(addBtn);
    btnDiv.appendChild(buyBtn);
    imageCol.appendChild(imageDiv);
    imageCol.appendChild(btnDiv);
    rowContainer.appendChild(imageCol);

    // second colomn in row 
    const productInfos = document.createElement('div');
    productInfos.className = 'col-sm-12 col-md-6 col-lg-6 col-12 d-flex gap-4 flex-column productInfos';
    // firts infodiv create 
    const productCartInfo = document.createElement('div');
    productCartInfo.className = 'border p-2 ';
    // product title 
    const productTitle = document.createElement('p');
    productTitle.className = 'text-secondary'
    productTitle.innerText = product.title;
    // product price
    const productPrice = document.createElement('p');
    productPrice.className = 'text-secondary'
    productPrice.innerText = product.price;
    // rating div
    const ratingDiv = document.createElement('div');
    ratingDiv.className = 'text-secondary d-flex gap-2';
    //rating rate
    const productRating = document.createElement('p');
    productRating.className = 'rating'
    productRating.innerText = `${product.rating.rate} ⭐`;
    //rating count
    const productRatingCount = document.createElement('p');
    productRatingCount.className = 'text-secondary'
    productRatingCount.innerText = `Review ${product.rating.count}`;
    //rating dev append rating count and rating rate
    ratingDiv.appendChild(productRating);
    ratingDiv.appendChild(productRatingCount);
    //free delivery
    const freeDelivery = document.createElement('p');
    freeDelivery.className = 'text-secondary'
    freeDelivery.innerText = 'Free Delivery';
    // product infpdiv append titile price rating div and free delivery 
    productCartInfo.appendChild(productTitle);
    productCartInfo.appendChild(productPrice);
    productCartInfo.appendChild(ratingDiv);
    productCartInfo.appendChild(freeDelivery);



addBtn.addEventListener('click', ()=>{
    alert("This Product Add to cart successfully");
});

buyBtn.addEventListener('click', ()=>{
window.location.href = 'productBuy.html';
});



    // second product card info div 
    const productCartInfosecond = document.createElement('div');
    productCartInfosecond.className = 'border p-2 ';

    const productSize = document.createElement('p');
    productSize.innerText = "Select Size";

    const sizeBtnDiv = document.createElement('div');
    sizeBtnDiv.className = 'd-flex gap-3 ';



    const sizeBtnXs = document.createElement('button');
    sizeBtnXs.className = 'p-2 product-sizeBtn';
    sizeBtnXs.innerText = "XS";

    const sizeBtnS = document.createElement('button');
    sizeBtnS.className = 'p-2 product-sizeBtn';
    sizeBtnS.innerText = "S";

    const sizeBtnM = document.createElement('button');
    sizeBtnM.className = 'p-2 product-sizeBtn';
    sizeBtnM.innerText = "M";

    const sizeBtnL = document.createElement('button');
    sizeBtnL.className = 'p-2 product-sizeBtn';
    sizeBtnL.innerText = "L";

    const sizeBtnML = document.createElement('button');
    sizeBtnML.className = 'p-2 product-sizeBtn';
    sizeBtnML.innerText = "ML";

    const sizeBtnXL = document.createElement('button');
    sizeBtnXL.className = 'p-2 product-sizeBtn';
    sizeBtnXL.innerText = "XL";

    const sizeBtnXXL = document.createElement('button');
    sizeBtnXXL.className = 'p-2 product-sizeBtn xxl';
    sizeBtnXXL.innerText = "XXL";

    const sizeBtnXXXL = document.createElement('button');
    sizeBtnXXXL.className = 'p-2 product-sizeBtn xxxl';
    sizeBtnXXXL.innerText = "XXXL";

    productCartInfosecond.appendChild(productSize);
    sizeBtnDiv.appendChild(sizeBtnXs);
    sizeBtnDiv.appendChild(sizeBtnS);
    sizeBtnDiv.appendChild(sizeBtnM);
    sizeBtnDiv.appendChild(sizeBtnL);
    sizeBtnDiv.appendChild(sizeBtnML);
    sizeBtnDiv.appendChild(sizeBtnXL);
    sizeBtnDiv.appendChild(sizeBtnXXL);
    sizeBtnDiv.appendChild(sizeBtnXXXL);

    productCartInfosecond.appendChild(sizeBtnDiv);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'border   p-3';

    const productDetail = document.createElement('p');
    productDetail.className = 'mb-2';
    productDetail.innerText = 'Product Details';

    const productDesc = document.createElement('p');
    productDesc.className = 'mt-2';
    productDesc.innerText = `${product.description || "No description available."}`;
    descriptionDiv.appendChild(productDetail);
    descriptionDiv.appendChild(productDesc);
    // prodoct div append first info div 
    productInfos.appendChild(productCartInfo);
    productInfos.appendChild(productCartInfosecond);
    productInfos.appendChild(descriptionDiv);
    // rowcontainer append product div 
    rowContainer.appendChild(productInfos);


    // <div class="border   p-3">
    //                 <p class = "mb-2">Product Details</p>
    //                     <p class = "mt-2">${product.description || "No description available."}</p>
    //                 </div>
    //             </div>


    // container.innerHTML  =`
    //             <!-- print the Products -->
    //             <div class="col-sm-12 col-md-6 col-lg-6 col-12 productImageInfo">
    //                 <div class ="p-2  imageDiv d-flex justify-content-center">
    //                 <img src="${product.image}" alt="${product.title}" class = "productImage">
    //                 </div>
    //                 <div class=" d-flex gap-5 mt-2 productBtnDiv">
    //                     <button class="btn btn-primary btnProduct" type="submit">Add Cart</button>
    //                     <button class="btn btn-primary btnProduct" type="submit">Buy Now</button>
    //                 </div>
    //             </div>
    //             <div class="col-sm-12 col-md-6 col-lg-6 col-12 d-flex gap-4 flex-column productInfos">
    //                 <div class="border p-2 ">
    //                     <p  class = "text-secondary">${product.title}</p>
    //                     <p class = "text-secondary"> &#8377; ${product.price}</p>
    //                     <div class = "text-secondary d-flex gap-2">
    //                     <p class = "rating">${product.rating.rate} ⭐</p>
    //                     <p> Review ${product.rating.count} </p>
    //                      </div> 
    //                     <p class = "text-secondary">Free Delivery</p>
    //                 </div>

    //                 <div class="border  p-2">
    //                     <p>Select Size</p>
    //                     <div class = "d-flex gap-3" >
    //                         <button class="p-2 product-sizeBtn">XS</button>
    //                         <button class="p-2 product-sizeBtn">S</button>
    //                         <button class="p-2 product-sizeBtn">M</button>
    //                         <button class="p-2 product-sizeBtn">L</button>
    //                         <button class="p-2 product-sizeBtn">XL</button>
    //                         <button class="p-2 product-sizeBtn xxl">XXL</button>
    //                         <button class="p-2 product-sizeBtn xxxl">XXXL</button>
    //                     </div>
    //                 </div>

    //                 <div class="border   p-3">
    //                 <p class = "mb-2">Product Details</p>
    //                     <p class = "mt-2">${product.description || "No description available."}</p>
    //                 </div>
    //             </div>
    // `;  
}