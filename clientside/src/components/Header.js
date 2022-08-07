import React from 'react'
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
  } from 'mdb-react-ui-kit';
import logo from '../images/logo.jpg'
import Avatar from '@mui/material/Avatar';


const Header = () => {
  return (
    <div>
     <>
      <MDBNavbar fixed='top' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand to='/'> <img style={{marginLeft: '5rem', width: '4vw', height: '19vh', borderRadius: '3rem'}} src= {logo} alt="Logo"/>Hyper Shop</MDBNavbarBrand>
          <Avatar style={{marginRight: '5rem'}}>H</Avatar>
        </MDBContainer>
      </MDBNavbar>
    </>

    </div>
  )
}

export default Header
