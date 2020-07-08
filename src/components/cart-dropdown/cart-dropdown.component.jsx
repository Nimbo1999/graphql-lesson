import React from 'react';
import { withRouter } from 'react-router-dom';
import { GET_CART_ITEMS, TOGGLE_CART_HIDDEN } from '../../graphql/resolvers'
import { useQuery, useMutation } from '@apollo/react-hooks';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ history }) => {

  // eslint-disable-next-line
  const { loading, data: { cartItems } } = useQuery(GET_CART_ITEMS);

  const [toggleCartHidden] = useMutation(TOGGLE_CART_HIDDEN);

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

export default withRouter(CartDropdown);
