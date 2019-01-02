import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item'
import './ItemPage.css';

// items components

function ItemsPage({items, onAddToCart}){
    return(
        <ul className="ItemPage-items">
        {items.map(item => <li key={item.id} className="ItemPage-item">
        <Item item={item} onAddToCart={() => onAddToCart(item)}/>
        </li> )}
        </ul>
    );
}
ItemsPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired
};
export default ItemsPage;
