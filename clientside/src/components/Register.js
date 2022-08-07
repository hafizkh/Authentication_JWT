import React from 'react'
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
} from 'mdb-react-ui-kit';
import { Container } from '@mui/system';

const Register = () => {
    return (
        <>
            <Container style={{
                margin: '50px auto', maxWidth: '800px', minHeight: '480px',
                boxShadow: '0 5px 15px 0 rgb(96 100 96 / 30%)', borderRadius: '36px', alighItems: 'center', paddingTop: '18px'
            }}>
                <h1 >Register Here</h1>
                <form className='mt-4' style={{ display: 'inline-block', width: '20rem' }}>
                    <MDBRow className='mb-4'>
                        <MDBCol>
                            <MDBInput id='form3Example1' label='First name' />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput id='form3Example2' label='Last name' />
                        </MDBCol>
                    </MDBRow>
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
                        Sign up
                    </MDBBtn>

                    <p>
                        Already have account? <a href='/login'>Login</a>
                    </p>


                </form>
            </Container>

        </>
    )
}

export default Register