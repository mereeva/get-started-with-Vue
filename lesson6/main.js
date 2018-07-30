var app = new Vue({
    el: '#app',
    data: {
      product: 'Socks',
      description: "Socks of high quality",
      image: "./assets/brown-socks.jpeg",
      altText: "Brown socks",
      url:"./assets/brown-socks.jpeg",
      onSale:true,
      inStock:true,
      inventory:11,
      details:["Brown Colour", "Fabric: Cotton", "Pattern: Solid","For Men"],
      variants:[
        {
          variantId : 2234,
          variantColor: "Brown",
          variantImage: "./assets/brown-socks.jpeg"
        },
        {
          variantId : 2235,
          variantColor: "White",
          variantImage: "./assets/white-socks.jpeg"
        },
        {
          variantId : 2236,
          variantColor: "Black",
          variantImage: "./assets/black-socks.jpeg"
        }
      ],
      sizes:[
        {
          sizeId : 1234,
          sizeName: "S"
        },
        {
          sizeId : 1235,
          sizeName: "M"
        },
        {
          sizeId : 1236,
          sizeName: "L"
        }
      ],
      cart:0,
      },
      methods:{
        addToCart: function(){ //Anonymous function
          this.cart += 1
        },
        removeFromCart: function(){ //Anonymous function
          this.cart -= 1
        },
        changeImage(variantImage){ //ES6 shorthand for anonymous function (Might not work on all browsers)
          this.image = variantImage
        }
    }
  })