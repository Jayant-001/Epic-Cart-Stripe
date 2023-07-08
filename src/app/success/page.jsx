import ClearCartProducts from "@/components/cart/ClearCartProducts";
import axios from "axios";
// import { useShoppingCart } from "use-shopping-cart";

const PaymentSuccessPage = async ({ searchParams }) => {
    const sessionId = searchParams.session_id;

    // const {clearCart} = useShoppingCart()

    // const { data, error } = useSWR(
    //     () => (sessionId ? `/api/checkout-session/${sessionId}` : null),
    //     (url) => axios.get(url).then((res) => res.data)
    // );

    let data = null;
    let error = null;

    if (sessionId) {
        await axios
            .get(
                `${process.env.NEXT_PUBLIC_API_URL}/api/checkout-session/${sessionId}`
            )
            .then((re) => {
                data = re.data;
            })
            .catch((err) => {
                error = err;
            });
    }

    // console.log(data?.customer_details.email);

    return (
        <div className="container xl:max-w-screen-xl mx-auto py-12 px-6 text-center">
            {error ? (
                <div className="p-2 rounded-md bg-rose-100 text-rose-500 max-w-md mx-auto">
                    <p className="text-lg">something went wrong</p>
                </div>
            ) : data === undefined || data === null ? (
                <div className="p-2 rounded-md text-gray-500 max-w-md mx-auto">
                    <p className="text-lg">Loading...</p>
                </div>
            ) : (
                <ClearCartProducts email={data?.customer_details.email} />
            )}
        </div>
    );
};

export default PaymentSuccessPage;
