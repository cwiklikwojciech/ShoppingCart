import {useLocation} from 'react-router-dom';

// type ProductPage = { 
//     id: number
// }

export default function ProductPage(){
    const location = useLocation();
    console.log(location);
    return <h1>ProductPage{location.state.id}</h1>
}