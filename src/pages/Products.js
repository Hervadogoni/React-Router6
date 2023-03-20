import products from "../data"
import {Link} from "react-router-dom"
import {useState} from "react"

const Products = () => {
  const [Product, setProduct] = useState(products) 

  return (
      <section className='section'>
        <h2>Product List</h2>
        {Product.map((product) => {
          return(
            <div key={product.id}>
              <h3>{product.name}</h3>
              <Link to={`/product/${product.id}`}>see more</Link>
            </div>
          )
        })}
      </section>
  );
};

export default Products;
