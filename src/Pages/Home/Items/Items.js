import React from 'react';
import useItems from '../../../hooks/useItems';

const Items = () => {
    const [items, setItems] = useItems()
    return (
        <div>
            <p>{items.length}</p>
        </div>
    );
};

export default Items;