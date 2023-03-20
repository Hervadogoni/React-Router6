import products from "../data"
import{Link, useParams} from "react-router-dom"

const SingleProduct = () => {
  const {productId} = useParams()
  const product = products.find(product => product.id === productId)
  const {image, id} = product
  return (
    <div>
        <h3>{`Product id : ${id}`}</h3>
        <Link to="/product">Back</Link>
    </div>
  );
};

export default SingleProduct;
