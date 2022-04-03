import React,{useState, useEffect} from 'react'
import logo from "../../../../../assets/icon.png";
const fs = require('fs');
function Document({id}) {
  const [data, setData] = useState({});
  const [loading, isLoading] = useState(true);
  const getData =()=>{
    const file = './src/data/invoices/'+id+'.json';
    const loadedData = JSON.parse(fs.readFileSync(file, 'utf8'));
    setData(loadedData);
    isLoading(false);
  }
  useEffect(()=>{
    if(loading){
      getData();
      
    }
    else{
      isLoading(false);
      
    }
  },[])

  const checkIfLoading = () => {
    if(loading){
      return "loading";
    }
    else{
      return data.data;
    }
  }
  return (
    

    <div className="invoice">
      {console.log(data)}
        <div className='top'>
            <div className='left'>
            <img className='logo' src={logo} alt="logo.png"/>
            </div>

        <div className='right'>
        <span className='invoice-head'>INVOICE</span> <br />
        <span className='number'>NO.{id}</span>
        </div>
        </div>

        
        <div className='table-document'>
            <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{checkIfLoading().name}</td>
                  <td>{checkIfLoading().price}</td>
                </tr>
                <tr>
                  <td>{checkIfLoading().a1.description}</td>
                  <td>{checkIfLoading().a1.price}</td>
                </tr>
                </tbody>
            </table>
        </div>

        
        
    </div>
  )
}

export default Document