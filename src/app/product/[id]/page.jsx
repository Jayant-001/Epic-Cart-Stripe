import ProductDetailPage from "@/components/products/ProductDetailPage";
import { stripe } from "@/utils/stripe";

const fetchData = async (id) => {
    const data = await stripe.products.retrieve(id, {
        expand: ["default_price"],
    });

    const product = {
        name: data.name,
        id: data.id,
        currency: data.default_price.currency,
        price: data.default_price.unit_amount,
        image: data.images[0],
    };

    return product;
};

const page = async ({ params }) => {
    const { id } = params;
    const product = await fetchData(id);

    return <ProductDetailPage product={product} />;
};

export default page;
