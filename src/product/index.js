import { useParams } from 'react-router-dom';
import axios from "axios";
import {useEffect, useState} from 'react';
function ProductPage() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    useEffect(function(){
    axios.get(`https://3b6efc68-0c20-4137-bfca-ee37c60d45d8.mock.pstmn.io/products/${id}`).then(
    function(result){
        setProduct(result.data);
    }).catch(function(error){
        console.error(error);
    });
        },[]);
    if (product === null){
        return <h1>상품정보를 받고 있습니다..</h1>
    }
    return (
        <div>
            <div id="image-box">
                <img src={"/" + product.imageUrl} />
            </div>
            <div id="profile-box">
                <img src="/images/icons/avatar.png" />
                <span>{product.seller}</span>
            </div>
            <div id="contents-box">
                <div id="name">{product.name}</div>
                <div id="price">{product.price}</div>
                <div id="discription">{product.discription}</div>
            </div>
        </div>
        
    );
}
export default ProductPage;