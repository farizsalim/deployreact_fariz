import Bar from "./Bar";
import Count from "./Count";
import { useSelector } from 'react-redux';

const Product = () => {

    const count = useSelector(state => state.counter);

  return (
    <div className="d-flex justify-content-center my-5">
      <div className="card text-center" style={{ width: "18rem" }}>
        <h3>Test Product</h3>
          <Count/>
            <Bar value={count}/>
      </div>
    </div>
  );
}

export default Product;
