import React from 'react'
import {
 MDBContainer,
 MDBNavbar,
 MDBNavbarBrand
} from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
     <MDBNavbar light bgColor='info'>
        <MDBContainer fluid>
          <MDBNavbarBrand href=''>
          <i class="fa-solid fa-utensils fa-beat-fade mx-3 fs-2"></i>
          RATATOUILLE
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header