import { Grid } from '@mui/material'
import{ React, useState} from 'react'
import Navbar from '../components/Navbar'
import illustrator from '../assets/hostpital.png'
import { Box, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import{Link} from 'react-router-dom'
import { Button, AppBar, Toolbar } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const myStyle = {
    background: 'rgb(116,200,189)',
    '-webkit-backdrop-filter': 'blur(10px)',
    backdropFilter: ' blur(10px)',
    border: '1px solid rgba(26,100,213,0.25)'
}
const myStyle2 ={
    background: "rgba(116,210,204,0.55)",
  "-webkit-backdrop-filter": "blur(8px)",
  backdropFilter: "blur(8px)",
  border: '1px solid rgba(116,210,204,0.275)'
}

const Login = () => {

    const navigate = useNavigate()
    const url='http://localhost:5006/users/login'
     const [status, setstatus] = useState("")
     const [message, setmessage] = useState("")

    const formik = useFormik({
        initialValues: {
            email:'',
            password:''
        },
        onSubmit: (values) => {
            console.log(values, url);
            axios.post(url,values).then((res)=>{
                console.log(res)
                setmessage(res.data.message)
                setstatus(true)
                if (res.data.status===true) {
                   setstatus(true)
                   navigate('/patientsdashboard')
                }
                else{
                   console.log(res.data.message);
                  setstatus(false)
                }
              })
        },
        validationSchema:yup.object({
            email:yup.string().required('This input required'),
            password:yup.string().required('This input required')
        })
    })

    return (
        <>
            <Navbar />
            <Grid container  style={{ backgroundColor: `${myStyle}`,}} sx={{display:{xs:'flex',sm:'flex'}}}>
                <Grid item sm={6} sx={{ backgroundImage: `url(${illustrator})`, backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: { sm: '55rem', lg: '60rem' }, width: '100%', borderBottomRightRadius: '100px' }} >

                </Grid>
                <Grid item xs={12} sm={6} sx={{ backgroundImage: `url(${illustrator})`, backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: { sm: '55rem', lg: '60rem' }, width: '100%' ,borderTop:1}}>
                    <Grid container sx={{ backgroundColor: 'white', width: '100%', height: '100%', borderTopLeftRadius: '100px', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item sm={8} style={myStyle} sx={{p:5}}>
                            <Typography variant="h3" color="initial" sx={{ display: 'flex', justifyContent: 'center', width: '100%', fontWeight: 500 }}>
                                LOGIN
                            </Typography>
                            <form onSubmit={formik.handleSubmit}>
                                <TextField
                                    id="standard-error-helper-text"
                                    label="Email"
                                    defaultValue=""
                                    variant="standard"
                                    sx={{width:'100%'}}
                                    inputProps={{style: {fontSize: 20,color:'white'}}}
                                    InputLabelProps={{style: {fontSize: 20,color:'white'}}}
                                    onBlur={formik.handleBlur} 
                                    onChange={formik.handleChange}
                                    helperText={formik.touched.email?<span class="text-danger">{formik.errors.email}</span>:''}
                                    name="email"
                                />
                                <TextField
                                    id="standard-error-helper-text"
                                    label="Password"
                                    defaultValue=""
                                    
                                    variant="standard"
                                    sx={{width:'100%'}}
                                    inputProps={{style: {fontSize: 20,color:'white'}}}
                                    InputLabelProps={{style: {fontSize: 20,color:'white'}}}
                                    onBlur={formik.handleBlur} 
                                    onChange={formik.handleChange}
                                    helperText={formik.touched.password?<span class="text-danger">{formik.errors.password}</span>:''}
                                    name="password"
                                />
                               <button type='submit' style={{width:'100%',marginTop:'2rem',paddingTop:'.5rem',paddingBottom:'.5rem'}}>Login</button>
                            </form>
                           <Typography variant="body1" color="initial" sx={{fontSize:'1.3rem', mt:1}}>forgot password ?</Typography>
                          <Link to='/signup'> <Typography variant="body1" color="initial" sx={{fontSize:'1.3rem', mt:1}}>Don't have an account? SignUp</Typography></Link>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid> 
             {/* <Grid container sx={{backgroundImage: `url(${illustrator})`,backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width:'100%',height:{xs:'50rem',md:'none'},display:{xs:'flex',md:'none'},justifyContent:"center",alignItems:'center'}}>
                <Grid item xs={12} sm={8} sx={{backgroundColor:`${myStyle2}`}}>
                    <Typography variant="subtitle1" color="initial">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur
                    </Typography>
                </Grid>
            </Grid> */}
        </>
    )
}

export default Login