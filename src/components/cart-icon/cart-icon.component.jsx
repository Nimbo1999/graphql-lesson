import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { TOGGLE_CART_HIDDEN, GET_ITEM_COUNTS } from '../../graphql/resolvers'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
 
  const [ toggleCartHidden ] = useMutation(TOGGLE_CART_HIDDEN);
  // eslint-disable-next-line
  const { loading, data: { itemCount } } = useQuery(GET_ITEM_COUNTS);

  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
};

export default CartIcon;
