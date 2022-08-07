import React from 'react'
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
  } from 'mdb-react-ui-kit';
import logo from '../images/logo.jpg'
import Avatar from '@mui/material/Avatar';
import Login from './Login';


const Header = () => {
  return (
    <div>
     <>
      <MDBNavbar sticky dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand to='/'> <img style={{marginLeft: '5rem', width: '65px', height: '60px', borderRadius: '3rem'}} 
          src= {logo} alt="Logo"/>Hyper Shop</MDBNavbarBrand>
          <Avatar style={{marginRight: '5rem', backgroundColor: 'rgb(92 92 79)'}}>H</Avatar>
        </MDBContainer>
      </MDBNavbar>
    <Login />
    </>
    </div>
  )
}

export default Header
