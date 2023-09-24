import { useState } from "react";


const Count = ({setValuePublic}) => {

    const [value,setValue] = useState(0)

    const handleminus = () =>{
        if(value > 0){
            const newValue = value - 1;
            console.log(newValue)
            setValue(newValue)
            setValuePublic(newValue)
        }
    }

    const handleplus = () =>{
        const newValue = value + 1;
        console.log(newValue)
        setValue(newValue)
        setValuePublic(newValue)
    }
    return(
        <div className="container d-flex justify-content-center my-5 ">
                <button type="button" className="btn btn-danger mx-2" onClick={handleminus}>-</button>
                    <h5> {value} </h5>
                <button type="button" className="btn btn-success mx-2" onClick={handleplus}>+</button>
        </div>
    )
}

export default Count;