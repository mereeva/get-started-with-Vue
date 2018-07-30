var app = new Vue({
    el: '#app',
    data: {
      product: 'Socks',
      description: "Socks of high quality",
      image: "./assets/brown-socks.jpeg",
      altText: "Brown socks",
      url:"./assets/brown-socks.jpeg",
      onSale:true,
      inventory:11,
      details:["Brown Colour", "Fabric: Cotton", "Pattern: Solid","For Men"],
      variants:[
        {
          variantId : 2234,
          variantColor: "Brown",
        },
        {
          variantId : 2235,
          variantColor: "White",
        },
        {
          variantId : 2236,
          variantColor: "Black",
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
      ]
    }
  })