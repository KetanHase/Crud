import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {


    
    const navigate=useNavigate();


    // 1 state defined
    const [data, setData] = useState({ name: '', email: '', skill: '', mobile: ''})


    const dataHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    console.log(data) 


    const saveForm=async(e)=>{

        e.preventDefault()
        alert('User Registration Successfully')
        console.log(data)


        await axios.post('http://localhost:3000/user',data)

        navigate('/userdata')


    }

    return (
        <>

            <form action="" onSubmit={(e)=>saveForm(e)}>


                <div className="container border p-4 shadow-lg mt-5">
                    <div className="row fw-bold">
                        <div className="col-md-12">
                            <label htmlFor="">Enter Your User-Name</label>
                            <input type="text" name="name" value={data.name} id="" onChange={(e)=>dataHandler(e)} className='form-control' placeholder='enter username' />
                        </div>

                        <div className="col-md-12 my-3">
                            <label htmlFor="">Your Email:</label>
                            <input type="email" name="email" value={data.email}  onChange={(e)=>dataHandler(e)} id="" className='form-control' placeholder='eg. john@gmail.com' />
                        </div>

                        <div className="col-md-12 my-3">
                            <label htmlFor="">Enter Phone Number</label>
                            <input type="tel" name="mobile" value={data.mobile}  onChange={(e)=>dataHandler(e)} id="" className='form-control' />
                        </div>

                        <div className="col-md-12 my-3">
                            <label htmlFor="">Role</label>
                            <select name="skill" id="" className='form-control'  onChange={(e)=>dataHandler(e)} value={data.skill}>
                                <option value="none">select</option>
                                <option value="React">React</option>
                                <option value="Nodejs">Devloper</option>
                                <option value="Express JS">ExpressJS</option>
                                <option value="Mongo DB">Mongo DB</option>
                                <option value="other">other</option>
                            </select>
                        </div>

                        <div className="col-md-12 mt-3 text-center" >
                            <button className='btn btn-sm btn-success px-4 fw-bold shadow-lg'>Save User</button>
                        </div>

                    </div>
                </div>

            </form>

        </>
    )
}

export default Home;