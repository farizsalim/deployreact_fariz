import Test from "../Components/Test";
import Product from "../Components/Product";
import List from "../Components/List";
import { useState } from "react";

const Home = () => {

    const [isLoading,setLoading] = useState(false);

    setTimeout(()=>{
        setLoading(true);
    },3000)

    return(
        <div className="App-header">
        <Test/>
        {isLoading ? (
          <div>
            <Product/>
            <List/>
          </div>
        ):(
          <h2 className="text-center m-5" style={{color:"white"}}>Loading...</h2>
        )
        }
      </div>
    )
}

export default Home;