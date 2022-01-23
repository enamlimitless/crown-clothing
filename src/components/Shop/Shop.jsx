import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import PreviewCollection from '../PreviewCollection/PreviewCollection';
import ShopData from './ShopData';
const Shop = () => {
    const[data, setData] = useState([])
    useEffect(() => {
        setData(ShopData)
    }, [])
    console.log(data)
    return (
        <Container className='shop-page'>
            {
                ShopData.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))
            }
        </Container>
    );
};

export default Shop;