import React from 'react'
import Table from '../Table/Table'

function Invoices() {
  return (
    <div className='invoices-contaienr'>
      <div className='invoices'>
      {<Table type="invoice"/>}
      </div>
      </div>
  )
}

export default Invoices