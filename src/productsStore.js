// Skyblue Bob: price_1MfRJvINargwvG7eNAh1fW0M
//Water waves:price_1MfRLeINargwvG7e3bn6vXO7
//Body waves: price_1MgUkfINargwvG7eCBIo7sun
// Blonde : price_1MgUliINargwvG7epRZPeMxz
// Bone Staight : price_1MgV27INargwvG7e3QjDXvi2


const productsArray = [
  {
    id: "price_1MfRHKINargwvG7e9CxWPFbX",
    name: "Black Bob",
    price: 89.99,
    units: 5,
    url: "images/blackbob.jpg",
  },

  {
    id: "price_1MfRJvINargwvG7eNAh1fW0M",
    name: "Skyblue Bob",
    price: 100.99,
    units: "2",
    url: "images/bluebob.jpg",
  },
  {
    id: "price_1MfRLeINargwvG7e3bn6vXO7",
    name: "Water waves",
    price: 300,
    units: "10",
    url: "images/curls.jpg",
  },
  {
    id: "price_1MgUkfINargwvG7eCBIo7sun",
    name: "Body Waves",
    price: 50.99,
    units: "2",
    url: "images/waves.jpg",
  },
  {
    id: "price_1MgUliINargwvG7epRZPeMxz",
    name: "Blonde",
    price: 40,
    units: "10",
    url: "images/blonde.jpg",
  },
  {
    id: "price_1MgV27INargwvG7e3QjDXvi2",
    name: "Bone Straight",
    price: 499.99,
    units: "2",
    url: "images/Bone Straight.jpg",
  },


];
function getProductData(id) {
  let productData = productsArray.find(product => product.id === id);
  if (productData == undefined) {
    console.log("product not found");
    return undefined;
  }
  return productData;
}
export { productsArray, getProductData };
