import CartItem from '../CartItem/CartItem';
//styles
import { Wrapper } from './Cart.styles';
import CloseIcon from '@material-ui/icons/Close';
//types
import { CartItemType } from '../App';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  closeModal: () => void;
};

const Cart: React.FC<Props> = ({
  cartItems,
  addToCart,
  removeFromCart,
  closeModal,
}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

  return (
    <Wrapper>
      <CloseIcon className="close-btn" onClick={closeModal} />
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
