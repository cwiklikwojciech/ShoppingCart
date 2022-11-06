import storeItem from "../data/items.json";
import { Stack, Button } from "react-bootstrap";
import formatCurrency from '../utilities/formatCurrency';
import { useShoppingCard } from '../context/ShoppingCardContext';

type CartItem = {
    id:number
    quantity:number
}

export default function CartItem({id, quantity}:CartItem) {
    const {
        removeFromCart,
    } = useShoppingCard();
    
    const itemShop = storeItem.find(storeItem => storeItem.id === id)
    if (itemShop == null) return null
    return(
        <>
        <Stack className="d-flex align-items-center" direction="horizontal" gap={2} >
                <img 
                    src={itemShop.imgUrl} 
                    style={{width: "125px", height: "75px", objectFit: "cover"}}
                />
                <div className="me-auto">
                    <div>{itemShop.name}{" "}
                        <span className="text-muted" style={{fontSize: ".65rem"}}>{quantity ? `x${quantity}` : null}</span>
                    </div>
                    <div className="text-muted" style={{fontSize: ".75rem"}}>{formatCurrency(itemShop.price)}</div>
                </div>
                <div>{formatCurrency(itemShop.price)}</div>
                <Button 
                    variant="outline-danger" 
                    size="sm"
                    onClick={() => removeFromCart(itemShop.id)}
                    >
                        x
                </Button>
        </Stack>
        </>
    )
}