var app = new Vue({
    el: "#app",
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        selectedVariant: 0,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './IMG/Socks.jpg',
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './IMG/Socks-blue.jpg',
                variantQuantity: 0
            }
        ],
        cart: 0,
        onSale: true
    },

    methods: {
        addToCart: function() {
            this.cart += 1
        },
        updateProduct: function(index) {
            this.selectedVariant = index
            console.log(index)
        }

    },

    computed: {
        title () {
            return this.brand + ' ' + this.product
        },
        image () {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock () {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale () {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' ' + 'are on sale!'
            }
            return this.brand + ' ' + this.product + ' ' + 'are not on sale!'
            
        }

    
  
    },
})