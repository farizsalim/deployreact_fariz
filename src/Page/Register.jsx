import { useState } from "react";

const Register = () => {

    const [formdata,setFormdata] = useState({
        username: "",
        email: "",
        gender: "",
        address: "",
        password:""

    })

    const [errors, setErrors] = useState({
        username: "",
        email: "",
        gender: "",
        address: "",
        password: ""
      });

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {};

        if (!formdata.username) {
            validationErrors.username = "Username tidak boleh kosong!";
        }

        if (!formdata.email) {
            validationErrors.email = "Email tidak boleh kosong!";
        }

        if (!formdata.gender) {
            validationErrors.gender = "Pilih Gender!";
        }

        if (!formdata.address) {
            validationErrors.address = "Address tidak boleh kosong!";
        }

        if (!formdata.password) {
            validationErrors.password = "Password tidak boleh kosong!";
        }else if (formdata.password.length < 8){
            validationErrors.password = "Password minimal 8 karakter!";
        }
      
        if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
        }

        console.log(formdata);

    }

    const handleChange = (e) => {
        const {name,value} = e.target
        setFormdata({
            ...formdata,[name]: value
        })
    }

    return(
        <div className="d-flex justify-content-center m-5">
            <div className="card p-3" style={{width: "25rem"}}>
                <h4 className="text-center">Login</h4>
                <form onSubmit={handleSubmit}>
                    <div>
                        
                        <label className="form-label">Username</label>
                        <input type="text" name="username" className="form-control" placeholder="Masukkan Username" value={formdata.username} onChange={handleChange}/>
                        <p className="text-danger ml-2">{errors.username}</p>
                    </div>
                    <div>
                        <label className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" placeholder="Masukkan Email" value={formdata.email} onChange={handleChange}/>
                        <p className="text-danger ml-2">{errors.email}</p>
                    </div>
                    <div>
                        <label className="form-label">Gender</label><br/>
                        <input type="radio" value="Laki-Laki" className="form-check-input" name="gender" checked={formdata.gender === "Laki-Laki"} onChange={handleChange}/>Laki-Laki 
                        <input type="radio" value="Perempuan" className="form-check-input mx-2" name="gender" checked={formdata.gender === "Perempuan"} onChange={handleChange}/>Perempuan
                        <p className="text-danger ml-2">{errors.gender}</p>
                    </div>
                    <div>
                        <label className="form-label">Address</label>
                        <textarea type="textarea" name="address" className="form-control" placeholder="Masukkan Address" value={formdata.address} onChange={handleChange}/>
                        <p className="text-danger ml-2">{errors.address}</p>
                    </div>
                    <div>
                        <label className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" placeholder="Masukkan Password" value={formdata.password} onChange={handleChange}/>
                        <p className="text-danger ml-2">{errors.password}</p>
                    </div>
                    <div className="mt-3 text-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Register;