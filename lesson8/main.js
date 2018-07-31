
Vue.component('product-details', {
  template:`
    <div class="product-meta-data">
        <ul>
          <li v-for="meta in metaData"> {{meta}}</li>
        </ul>
    </div>
  `,
  data(){
    return {
      metaData : [
        "Cash on Delivery option available", "Premium users get free delivery","Hand wash only","Do not iron"
      ]
    }
  }
})

Vue.component('product', {
  props:{
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">
      <div class="product-image">
          <a v-bind:href="url"><img v-bind:src="image" v-bind:alt="altText"></a>
      </div>
      <div class="product-info">
          <h1>{{title}}</h1>
          <div>{{description}}</div>
          <span v-if="onSale" class="onsale">{{onSale}}</span>
          <span v-if="inStock">IN STOCK!</span>
          <span v-else :class="{linethrough:!inStock}">OUT OF STOCK</span>
          <p v-if="inventory > 10">In Stock</p>
          <p v-else-if="inventory <= 10 && inventory > 0">Few Remaining!</p>
          <p v-else>Out of Stock</p>
          <p> User is Premium: {{premium}}</p>
          <p> Shipping: {{shipping}}</p>
          <ul>
              <li v-for="detail in details"> {{ detail }}</li>
          </ul>

          <div v-for="(variant,index) in variants" :key="variant.variantId" class="color-box" :style="{backgroundColor: variant.variantColor}" @mouseover="changeImage(index)">
          </div>

          <div v-for="size in sizes" :key="size.sizeId">
              {{ size.sizeName}}
          </div>

          <!-- <button v-on:click="cart +=1">Add to Cart</button> -->
          <div class="buttons">
              <button v-on:click="addToCart" :disabled="!inStock" :class="{disabledButton:!inStock}">Add to Cart</button>
              <button v-on:click="removeFromCart">Remove Item</button>
          </div>

          <div class="cart">
              <p>Cart({{cart}})</p>
          </div>

          <product-details></product-details>
      </div>
      
    </div>
  `,
  data(){
    return {
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
      }
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
    },
    shipping(){
      if(this.premium == true){
        return "Free"
      }
      return 2.99
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

var app = new Vue({
    el: '#app',
    data:{
      premium:true
    }
  })

