import ItemProductsList from "./ItemProductsList";

const ListProducts = ({ products }) => {
    return (
        <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
            <div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {products.map((product, id) => {
                    return (
                        <ItemProductsList key={id} product={product} id={id} />
                    );
                })}
            </div>
        </div>
    );
};

export default ListProducts;
