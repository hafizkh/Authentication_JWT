import React, { useState } from 'react'
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
} from 'mdb-react-ui-kit';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';

const Register = () => {
    const [input, setInput] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        cpassword: ""
    })
    function handleVal(e) {
        const { name, value } = e.target
        setInput(() => {
            return {
                ...input,
                [name]: value
            }

        })
    }

    const handlePrevent = async (e) => {
        e.preventDefault()

        const { fname, lname, email, password, cpassword } = input

        if (fname === "") {
            alert("Please enter your First Name")
        }
        else if (lname === "") {
            alert("Please enter your Last Name")
        }
        else if (email === "") {
            alert("Please enter your Email")
        }
        else if (!email.includes("@")) {
            alert("Please enter your Valid Email Address")
        }
        else if (password === "") {
            alert("Please enter your Password")
        }
        else if (password.length < 7) {
            alert("Password must be greater than 7 Char")
        }
        else if (cpassword !== password) {
            alert("Your Password does not match")
        }
        else {
            //    alert("User Registered Successfully")

            const userData = await fetch("http://localhost:8080/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname, lname, email, password, cpassword
                })
            })

            const data = await userData.json()
            // console.log(data.status)

            if (data.status === 201) {
                alert("User has been registered")
                setInput({ ...input, fname: "", lname: "", email: "", password: "", cpassword: "" })
            }

        }

    }
    return (
        <>
            <Container style={{
                margin: '50px auto', maxWidth: '800px', minHeight: '480px', backgroundColor: 'rgb(243 243 243)',
                boxShadow: '0 5px 15px 0 rgb(96 100 96 / 30%)', borderRadius: '36px', alighItems: 'center', paddingTop: '18px'
            }}>
                <h1 >Register Here</h1>
                <form className='mt-4' style={{ display: 'inline-block', width: '20rem' }}>
                    <MDBRow className='mb-4'>
                        <MDBCol>
                            <MDBInput id='fnam' name='fname' label='First name' value={input.fname} onChange={handleVal} />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput id='lname' name='lname' label='Last name' value={input.lname} onChange={handleVal} />
                        </MDBCol>
                    </MDBRow>
                    <MDBInput className='mb-4' type='email' id='email' name='email' label='Email address' value={input.email} onChange={handleVal} />
                    <MDBInput className='mb-4' type='password' id='password' name='password' label='Password' value={input.password} onChange={handleVal} />
                    <MDBInput className='mb-4' type='password' id='cpassword' name='cpassword' label='Confirm Password' value={input.cpassword} onChange={handleVal} />

                    <MDBRow className='mb-4'>
                        <MDBCol className='d-flex'>
                            <MDBCheckbox id='rememberMe' label='Remember me' />
                        </MDBCol>
                    </MDBRow>

                    <MDBBtn type='submit' className='mb-4' block onClick={handlePrevent}>
                        Sign up
                    </MDBBtn>

                    <p>
                        Already have an account? <Link to='/login'>Login</Link>
                    </p>


                </form>
            </Container>

        </>
    )
}

export default Register