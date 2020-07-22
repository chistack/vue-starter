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
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ],
        sizes: ["Small", "Medium", "Large"]
    },
})