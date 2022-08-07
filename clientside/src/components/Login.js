import React from 'react'
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';
import { Container } from '@mui/system';

const Login = () => {
    return (
        <>
            <Container style={{margin: '50px auto', maxWidth:'800px',minHeight:'480px',
            boxShadow:'0 5px 15px 0 rgb(96 100 96 / 30%)',borderRadius: '36px', alighItems: 'center', paddingTop: '18px'}}>
            <h1 >Login Here</h1>
                <form className='mt-4' style={{ display: 'inline-block', width: '20rem' }}>
                    <MDBInput className='mb-4' type='email' id='form2Example1' label='Email address' />
                    <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' />

                    <MDBRow className='mb-4'>
                        <MDBCol className='d-flex justify-content-center'>
                            <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
                        </MDBCol>
                        <MDBCol>
                            <a href='#!'>Forgot password?</a>
                        </MDBCol>
                    </MDBRow>

                    <MDBBtn type='submit' className='mb-4' block>
                        Sign in
                    </MDBBtn>

                    <div className='text-center'>
                        <p>
                            Don't have account? <a href='#!'>Register</a>
                        </p>
                        <p>or sign up with:</p>

                        <MDBBtn floating className='mx-1'>
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>

                        <MDBBtn floating className='mx-1'>
                            <MDBIcon fab icon='google' />
                        </MDBBtn>

                        <MDBBtn floating className='mx-1'>
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>

                        <MDBBtn floating className='mx-1'>
                            <MDBIcon fab icon='github' />
                        </MDBBtn>
                    </div>
                </form>
            </Container>

        </>
    )
}

export default Login
