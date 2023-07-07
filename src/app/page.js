import ListProducts from "@/components/products/ListProducts";
import { stripe } from "@/utils/stripe";

export const metadata = {
    title: "Epic Store",
};

async function fetchData() {
    const inventory = await stripe.products.list({
        expand: ["data.default_price"],
        // limit: 5,
    });

    const products = inventory.data.map((product) => {
        return {
            name: product.name,
            id: product.id,
            currency: product.default_price.currency,
            price: product.default_price.unit_amount,
            image: product.images[0],
        };
    });

    return products;
}

export default async function Home() {
    const products = await fetchData();

    return (
        <div>
            <ListProducts products={products} />
        </div>
    );
}
