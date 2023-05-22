import { Product } from './Product';
import { useGlobalContext } from './Context/Context';

export const Products = ({ products }) => {
  const { cart } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>Your Cart</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your cart</h2>
      </header>
      <div>
        {products.map((product) => {
          return <Product key={product.key} {...product}></Product>;
        })}
      </div>
      <div className="text-black">
        <h4>
          Total<span>$0.00</span>
        </h4>
      </div>
    </section>
  );
};

export default Products;
