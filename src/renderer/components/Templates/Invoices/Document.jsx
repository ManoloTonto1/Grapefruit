import React from 'react'
import logo from "../../../../../assets/icon.png";
function Document() {
  return (
    <div className="invoice">
        <div className='top'>
            <div className='left'>
            <img className='logo' src={logo} alt="logo.png"/>
            </div>

        <div className='right'>
        <span className='invoice-head'>INVOICE</span> <br />
        <span className='number'>NO. 2021222</span>
        </div>
        
        </div>
        
        
    </div>
  )
}

export default Document