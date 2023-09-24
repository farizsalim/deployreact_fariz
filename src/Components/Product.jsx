import Bar from "./Bar";
import Count from "./Count";
import { useState } from "react";

const Product = () =>{
    
    const [countValue, setCountValue] = useState(0);
    

    const handleCountChange = (newValue) => {
        setCountValue(newValue);
      };

    return(
        <div className="d-flex justify-content-center my-5" >
            <div className="card text-center" style={{width: "18rem"}}>
                <h3>Test Product</h3>
                <Count setValuePublic = {handleCountChange} />
                <Bar value={countValue}/>
            </div>
        </div>
    )
}

export default Product;