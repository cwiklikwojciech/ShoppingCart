import { Card, Button } from "react-bootstrap"
import { useShoppingCard } from '../context/ShoppingCardContext';
import formatCurrency from '../utilities/formatCurrency'
import {useNavigate} from 'react-router-dom';
import {useCallback} from 'react';

type StoreItemProps = { 
    id: number
    name: string
    price: number
    imgUrl: string
}

export default function StoreItem({id, name, price, imgUrl}: StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCard();
    
    const quantity = getItemQuantity(id);

    //Navigation
    const navigate = useNavigate();
    //const handleCart = navigate('/ProductPage'),{state:{id:1}});
    const handleCart=()=>{
        navigate('/ProductPage',{state:{id:id}});
          }

    const handleOnClick = () => {
        console.log("click", id);
        handleCart();
    };
    
    return <Card onClick={handleOnClick}>
        <Card.Img className="h-60" variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover"}}/>
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
              {quantity === 0 ? (
                <Button className="w-100" onClick={() => increaseCartQuantity(id)}> +Add to Card </Button>
              ) : <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                    <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                    <div>
                        <span className="fs-3">{quantity}</span> in cart
                    </div>
                    <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                    </div>
                <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remove</Button>
              </div> }  
            </div>
        </Card.Body>
    </Card>
}