
import { loginWithGoogle, singOut } from "../user/userAuth.js";
import getProducts from "../utils/api.js"
// profile icons click 
const profileIcon = document.querySelector('.profile-icon');
const userInfoBox = document.getElementById('userInfoBox');

profileIcon.addEventListener('mouseenter', () => {
    userInfoBox.style.display = 'block';
});

profileIcon.addEventListener('mouseleave', () => {
    // Delay hiding so user can move to the box
    setTimeout(() => {
        if (!userInfoBox.matches(':hover')) {
            userInfoBox.style.display = 'none';
        }
    }, 200);
});
userInfoBox.addEventListener('mouseleave', () => {
    userInfoBox.style.display = 'none';
});




const bindEvents = () => {
    const userLogin = document.querySelector('#userInfo');
    userLogin.addEventListener('click', doLogin);
    printProducts();
}
window.addEventListener('load', bindEvents);
const printProducts = async () => {
    const products = await getProducts()
    for (let currProduct of products) {
        printProduct(currProduct);
        // console.log(currProduct);
    }
}

const doLogin = async () => {
    const user = await loginWithGoogle();
    // console.log(user);
    if (user) {
        const userName = document.querySelector("#userName");
        const userEmail = document.querySelector("#userEmail");
        userName.innerText = user.displayName;
        userEmail.innerText = user.email
        const signOut = document.querySelector('#userSingOut');
        signOut.style.display = 'inline-block'
        const userLogin = document.querySelector('#userInfo');
        userLogin.style.display = 'none';
        signOut.addEventListener('click', () => {
            singOut();
            userName.innerText = '';
            userEmail.innerText = '';
            signOut.style.display = 'none'
            userLogin.style.display = 'inline-block'
        })
    }
    else {
        const userLogin = document.querySelector('#userInfo');
        userLogin.style.display = 'inline-block';
    }
}

const printProduct = (currProduct) => {
    const productDiv = document.createElement('div');
    productDiv.className = 'card me-2 p-2 productCard';

    const productImg = document.createElement('img');
    productImg.className = 'card-img-top productImage';
    productImg.src = currProduct.image;
    productDiv.appendChild(productImg);
    // console.log(songDiv);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    productDiv.appendChild(cardBody);
    //cardBody 
    const h6 = document.createElement('h6');
    h6.className = 'card-title mt-2';
    h6.innerText = currProduct.title.slice(0, 21);
    cardBody.appendChild(h6);
    //   create heading 6 use to product title 
    const h5 = document.createElement('h5');
    h5.className = 'card-title mt-2';
    h5.innerHTML = `&#8377 ${currProduct.price}`;
    cardBody.appendChild(h5);
    //   create heading 5 use to product price 

    const span = document.createElement('span');
    span.className = ' d-flex  gap-2 mt-3 ';
    cardBody.appendChild(span);
    const ratingPara = document.createElement('p');
    ratingPara.className = ' rating';
    ratingPara.innerHTML = `${currProduct.rating.rate} &#9733;`;

    const reviewPara = document.createElement('p');
    reviewPara.className = ' d-flex  gap-2 mt-2';
    reviewPara.innerText = `${currProduct.rating.count} Reviews`;
    span.appendChild(ratingPara);
    span.appendChild(reviewPara);


    const div = document.querySelector("#root");
    div.appendChild(productDiv);

    productDiv.addEventListener('click', () => {
     // Save clicked product in localStorage
    localStorage.setItem('selectedProduct', JSON.stringify(currProduct));
    window.location.href = 'cart.html'; // or "cart.html"
    });

}






