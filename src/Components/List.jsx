import { useState } from "react";

const List = () => {
    const [listdata] = useState(
        {
            activity:['Makan','Tidur','Mandi','Bersih-bersih']
        }
    )
    
    return(
        <div className="d-flex justify-content-center m-5">
            <div className="card" style={{width: "18rem"}}>
                <ol>
                    <h3>Test List</h3>
                    {listdata.activity.map((data,i)=>{
                        return <li key={i}>{data}</li>
                    })}
                </ol>
            </div>
        </div>
    )
}

export default List;