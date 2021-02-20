import CartItem from '../CartItem/CartItem';
//styles
import { Wrapper } from './Cart.styles';
//types
import { CartItemType } from '../App';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Seu Carrinho de Compras</h2>
      {cartItems.length === 0 ? <p>Nenhum item no carrinho.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: R${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
