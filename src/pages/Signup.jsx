import { Grid,Typography,TextField } from '@mui/material'
import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import illustrator from '../assets/hostpital.png'
import {Routes,Route,Navigate,useNavigate,Link} from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup'

const myStyle ={
    background: 'rgb(116,200,189)',
    '-webkit-backdrop-filter': 'blur(10px)',
    backdropFilter: ' blur(10px)',
    border: '1px solid rgba(26,100,213,0.25)'
}

const Signup = () => {
    const navigate = useNavigate()
    const url='https://medserver.onrender.com/users/signup'
     const [status, setstatus] = useState("")
     const [message, setmessage] = useState("")
     const formik=useFormik({
       initialValues:{
           firstname:'',
           lastname:'',
           email:'',
           password:'',
 
       },
       onSubmit:(values)=>{
        console.log("here")
            console.log(formik.initialValues)
             setmessage("load")
             console.log(values)
             axios.post(url,values).then((res)=>{
                     console.log(res)
                     setmessage(res.data.message)
                     setstatus(true)
                     if (res.data.status===true) {
                        setstatus(true)
                        navigate('/login')
                     }
                     else{
                        console.log(res.data.message);
                       setstatus(false)
                     }
                   })
       },
       
       validationSchema:yup.object({
       firstname:yup.string().required('This input required').matches("[a-zA-Z]{3,30}",'not matching'),
       lastname:yup.string().required('This input required').matches("[a-zA-Z]{3,30}","not matching"),
       email:yup.string().required('This input required').matches("[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.]+[a-z]{2,}$","not matching"),
       password:yup.string().required('This input required').min(6,'at least six character'),
       })
       })

  return (
    <>
        <Navbar/>
        <Grid container sx={{backgroundImage:`url(${illustrator})`,backgroundPosition:'center',backgroundSize:'cover',justifyContent:'center',alignItems:'center',width:'100%',height:{xs:'70rem',sm:'70rem',md:'70rem',lg:'73rem'}}}>
            {/* <Grid item md={6} sx={{border:1}} style={Mystyle}>
                lorem lorem
            </Grid> */}
            <Grid item sm={5} style={myStyle} sx={{p:5,opacity:0.95}}>
                            <Typography variant="h3" color="initial" sx={{ display: 'flex', justifyContent: 'center', width: '100%', fontWeight: 500 }}>
                               PATIENT SIGNUP
                            </Typography>
                            <form onSubmit={formik.handleSubmit}>
                                <TextField
                                    id="standard-error-helper-text"
                                    onBlur={formik.handleBlur} 
                                    onChange={formik.handleChange}
                                    name="firstname"
                                    label="Firstname"
                                    defaultValue=""
                                    type="text"
                                    helperText={formik.touched.firstname?<span class="text-danger">{formik.errors.firstname}</span>:''}
                                    variant="standard"
                                    sx={{width:'100%'}}
                                    inputProps={{style: {fontSize: 20,color:'white'}}}
                                    InputLabelProps={{style: {fontSize: 20,color:'white'}}}
                                />
                                <TextField
                                    id="standard-error-helper-text"
                                    onBlur={formik.handleBlur} 
                                    onChange={formik.handleChange}
                                    name="lastname"
                                    label="Lastname"
                                    defaultValue=""
                                    helperText={formik.touched.lastname?<span class="text-danger">{formik.errors.lastname}</span>:''}
                                    variant="standard"
                                    sx={{width:'100%'}}
                                    inputProps={{style: {fontSize: 20,color:'white'}}}
                                    InputLabelProps={{style: {fontSize: 20,color:'white'}}}
                                />
                                <TextField
                                    id="standard-error-helper-text"
                                    onBlur={formik.handleBlur} 
                                    onChange={formik.handleChange}
                                    name="email"
                                    label="Email"
                                    defaultValue=""
                                    helperText={formik.touched.email?<span class="text-danger">{formik.errors.email}</span>:''}
                                    variant="standard"
                                    sx={{width:'100%'}}
                                    inputProps={{style: {fontSize: 20,color:'white'}}}
                                    InputLabelProps={{style: {fontSize: 20,color:'white'}}}
                                />
                                <TextField
                                    id="standard-error-helper-text"
                                    onBlur={formik.handleBlur} 
                                    name="password"
                                    onChange={formik.handleChange}
                                    label="Password"
                                    defaultValue=""
                                    helperText={formik.touched.password?<span class="text-danger">{formik.errors.password}</span>:''}
                                    variant="standard"
                                    sx={{width:'100%'}}
                                    inputProps={{style: {fontSize: 20,color:'white'}}}
                                    InputLabelProps={{style: {fontSize: 20,color:'white'}}}
                                />
                               <button type="submit" style={{width:'100%',marginTop:'2rem',paddingTop:'.5rem',paddingBottom:'.5rem'}}>Signup</button>
                            </form>
                           <Typography variant="body1" color="initial" sx={{fontSize:'1.3rem', mt:1}}>forgot password ?</Typography>
                           <Link to='/login'><Typography variant="body1" color="initial" sx={{fontSize:'1.3rem', mt:1}}>Already have an account? Login</Typography></Link>

                        </Grid>
        </Grid>
    </>
  )
}

export default Signup