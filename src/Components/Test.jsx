import { useState } from "react"
import Logo from "../logo.svg"
import "./Test.css"

const Test = () => {

const [jam,setJam] = useState(new Date());

const updateJam = () =>{
    setJam(new Date());
}

const waktuID = jam.toLocaleTimeString('id-ID'); 
const tanggalID = jam.toLocaleDateString('id-ID');

setInterval(updateJam, 1000);

    return(
        <div className="test">
            <img src={Logo} alt="logo-react" className="logo"/>
            <h3>Welcome To DeployTest React</h3>
            <p>{`Waktu menunjukkan ${waktuID}`}</p>
            <p>{`Tanggal menunjukkan ${tanggalID}`}</p>
        </div>
    )
}

export default Test;