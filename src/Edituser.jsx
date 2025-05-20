import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Edituser = () => {

  
    const navigate=useNavigate();


  
    const [data, setData] = useState({ name: '', skill: '', email: '', mobile: ''})




   
    var res = useParams();
    console.log(res.id)



   
    const FetchData = async () => {

        const result = await axios.get(`http://localhost:3000/user/${res.id}`)
        console.log(result.data)

        // setData(result.data)
        setData({ name: result.data.name, skill: result.data.skill, email: result.data.email, mobile: result.data.mobile })

    }

    
   useEffect(() => {
   
           FetchData()
   
       }, [])




     
    const dataHandler = (e) => {
        // alert()
        setData({ ...data, [e.target.name]: e.target.value })
    }
    console.log(data)


   
    const UpdateForm = async (e) => {
        e.preventDefault()
        console.log(data)
        alert('From is updated')

        await axios.put(`http://localhost:3000/user/${res.id}`, data)

        navigate('/adduser')



    }

    return (
        <>


            {/* 5 */}
            <form action="" onSubmit={(e) => UpdateForm(e)}>


                <div className="container border p-4 shadow-lg">
                    <div className="row fw-bold">
                        <div className="col-md-12">
                            <label htmlFor="">Update Your Name</label>
                            <input type="text" name="name" value={data.name} onChange={(e) => dataHandler(e)} className='form-control' placeholder='enter username' />
                        </div>

                        <div className="col-md-12 my-3">
                            <label htmlFor="">Update Your Email</label>
                            <input type="email" name="email" value={data.email} onChange={(e) => dataHandler(e)} id="" className='form-control' placeholder='eg. john@gmail.com' />
                        </div>
                        
                        <div className="col-md-12 my-3">
                            <label htmlFor="">Update Mobile</label>
                            <input type="tel" value={data.mobile} onChange={(e) => dataHandler(e)} name="mobile" id="" className='form-control' />
                        </div>

                        <div className="col-md-12 my-3">
                            <label htmlFor="">Update Your Skill</label>
                            <select name="skill" id="" value={data.skill} onChange={(e) => dataHandler(e)} className='form-control'  >
                                <option value="none">select</option>
                                <option value="React">React</option>
                                <option value="Nodejs">Nodejs</option>
                                <option value="Express JS">ExpressJS</option>
                                <option value="Mongo DB">Mongo DB</option>
                                <option value="other">other</option>
                            </select>
                        </div>





                        <div className="col-md-12 mt-3 text-center" >
                            <button className='btn btn-sm btn-dark px-4 fw-bold shadow-lg'>Update User</button>
                        </div>

                    </div>
                </div>




            </form>




        </>
    )
}

export default Edituser;