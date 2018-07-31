var app = new Vue({
    el: '#app',
    data: {
      brand: 'Jockey',
      product: 'Socks',
      description: "Socks of high quality",
      selectedVariant: 0,
      url:"./assets/brown-socks.jpeg",
      variants:[
        {
          variantId : 2234,
          variantColor: "Brown",
          variantImage: "./assets/brown-socks.jpeg",
          altText: "Brown socks",
          details:["Brown Colour", "Fabric: Cotton","For Men"],
          variantQuantity: 20,
          onSale: true
        },
        {
          variantId : 2235,
          variantColor: "White",
          variantImage: "./assets/white-socks.jpeg",
          altText: "White socks",
          details:["White Colour", "Fabric: Cotton", "Pattern: Solid","Gender Neutral"],
          variantQuantity: 0,
          onSale: false
        },
        {
          variantId : 2236,
          variantColor: "Black",
          variantImage: "./assets/black-socks.jpeg",
          altText: "Black socks",
          details:["Black Colour", "Fabric: Cotton","For Men"],
          variantQuantity: 6,
          onSale: true
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
      computed:{
        title(){
          return this.brand + " " + this.product
        },
        image(){
          return this.variants[this.selectedVariant].variantImage
        },
        altText(){
          return this.variants[this.selectedVariant].altText
        },
        inventory(){
          return this.variants[this.selectedVariant].variantQuantity
        },
        inStock(){
          return this.variants[this.selectedVariant].variantQuantity
        },
        onSale(){
          if(this.variants[this.selectedVariant].variantQuantity){
            return this.brand + " " + this.product + " sale! HURRY!"
          }
          else{
            return "";
          }
        },
        details(){
          return this.variants[this.selectedVariant].details
        }
      },
      methods:{
        addToCart: function(){ //Anonymous function
          this.cart += 1
        },
        removeFromCart: function(){ //Anonymous function
          this.cart -= 1
        },
        changeImage(index){ //ES6 shorthand for anonymous function (Might not work on all browsers)
          this.selectedVariant = index
        }
    }
  })