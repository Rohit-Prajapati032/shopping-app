    document.addEventListener("DOMContentLoaded", () => {
  // Get product from localStorage
  const data = localStorage.getItem("selectedProduct");

  if (!data) {
    alert("No product found in localStorage!");
    return;
  }

  const product = JSON.parse(data);

  // Inject into HTML
  document.getElementById("product-title").textContent = product.title;
  document.getElementById("product-price").textContent = product.price || "N/A";
  document.getElementById("product-rating").textContent = product.rating?.rate || "-";
  document.getElementById("rating-count").textContent = product.rating?.count || "0";
  document.getElementById("product-image").src = product.image || "https://via.placeholder.com/120";

  // Order Summary
  const price = parseFloat(product.price || 0);
  const discount = 2;
  const total = price - discount;

  document.getElementById("summary-price").textContent = price.toFixed(2);
  document.getElementById("order-total").textContent = total.toFixed(2);
});