import { useState } from "react"
import "./Test.scss"

const Test = () => {

const [jam,setJam] = useState(new Date());

const updateJam = () =>{
    setJam(new Date());
}

const waktuID = jam.toLocaleTimeString('id-ID'); 
const tanggalID = jam.toLocaleDateString('id-ID');

setInterval(updateJam, 1000);

    return(
        <div className="background">
            <div className="test my-5">
                <h3>Welcome to My Portofolio Website</h3>
                <p>{`Waktu menunjukkan ${waktuID}`}</p>
                <p>{`Tanggal menunjukkan ${tanggalID}`}</p>
            </div>
        </div>
    )
}

export default Test;