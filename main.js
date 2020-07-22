var app = new Vue({
    el: "#app",
    data: {
        product: 'Socks',
        image: './IMG/Socks.jpg',
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './IMG/Socks.jpg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './IMG/Socks-blue.jpg'
            }
        ],
        cart: 0
    },

    methods: {
        addToCart: function() {
            this.cart += 1
        },
        updateProduct: function(variantImage) {
            this.image = variantImage
        }
    }
})