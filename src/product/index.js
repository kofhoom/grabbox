import { useParams } from 'react-router-dom';

function ProductPage() {
    const {id} = useParams();
    
    return (
        <div>
            <h1>상품상세 {id}상품</h1>
        </div>
    )
    
}
export default ProductPage;