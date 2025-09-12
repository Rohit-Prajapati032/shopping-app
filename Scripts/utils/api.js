
const getProducts= async() => {
    const productsUrl  = "https://fakestoreapi.com/products";
    const response = await fetch(productsUrl);
    const products= await response.json();
    // console.log(products);
    return products;
    
}
// getProducts();
export default getProducts;

