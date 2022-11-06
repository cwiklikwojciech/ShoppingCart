import { Offcanvas, Stack, Button } from "react-bootstrap";
import { useShoppingCard } from '../context/ShoppingCardContext';
import CardItem from "./CardItem";
import formatCurrency from '../utilities/formatCurrency';
import {useNavigate} from 'react-router-dom';
import {useCallback} from 'react';

type ShoppingCart = {
    isOpen: boolean
}

export default function ShoppingCart({isOpen}:ShoppingCart){
    const {
        closeCart,
        cartItems,
        total
    } = useShoppingCard();

    const navigate = useNavigate();
    const handleCart = useCallback(() => navigate('/cart', {replace: true}), [navigate]);
    
    
    const handleClick = () => {
        handleCart();
        closeCart();
    }
    
    return(
      <>
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Card</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CardItem key={item.id} id={item.id} quantity={item.quantity} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">Total {formatCurrency(total())}</div>
                </Stack>
                     <div className="d-grid gap-2 mt-4">
                        <Button variant="success" size="lg" onClick={handleClick}> 
                            Go to Cart
                        </Button>
                    </div>
            </Offcanvas.Body>
        </Offcanvas>
      </>
    )
}