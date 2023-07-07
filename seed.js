const Stripe = require("stripe");
const products = require("./products");

const stripe = Stripe(
    "sk_test_51NR8ifSFrdAW28uNtQlmxCw2ABGnKHL4YQZ5Lg7zNtLeChfDJxx1e0ZqAbAN0uOcbsedUb6UQK5YlkwktBWrnCFd00IYdh5rRY"
);

(async () => {
    for (const product of products) {
        const stripeProduct = await stripe.products.create({
            name: product.name,
            default_price_data: {
                currency: product.currency,
                unit_amount_decimal: product.price,
            },
            images: [product.image],
        });
        console.log(stripeProduct);
    }
})();
