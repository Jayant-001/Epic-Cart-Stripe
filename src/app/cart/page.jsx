import ListCart from '@/components/cart/ListCart';

const CartPage = () => {


  return (
    <div className='container xl:max-w-screen-xl mx-auto py-5 px-6'>
      <h1 className='text-3xl fontbold tracking-widest'>My Cart</h1>
      <ListCart />
    </div>
  )
}

export default CartPage