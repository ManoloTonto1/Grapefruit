import React,{useState, useEffect} from 'react'
import logo from "../../../../../assets/icon.png";
const fs = require('fs');
function Document({id}) {
  const [data, setData] = useState(null);
  const [loading, isLoading] = useState(true);

  const getData =()=>{
    const file = './src/data/invoices/'+id+'.json';
    const loadedData = JSON.parse(fs.readFileSync(file, 'utf8'));
    setData(loadedData);
    
    
  }
  useEffect(()=>{
    getData();
    isLoading(false);
  },[])

  // const checkIfLoading = () => {
  //   if(loading){
  //     return "loading";
  //   }
  //   else{
  //     return data.data;
  //   }
  // }
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
        
        {loading ? 
          null
            :
            <div className='table-document'>
            <table>
              <thead>
                <tr>
                  <th className='desc'>Description</th>
                  <th className='amm'>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='underline name-first'>{data.data.name}</td>
                  <td className='align-right'>{data.data.price}</td>
                </tr>
                <tr>
                  <td>{data.data.a1.description}</td>
                  <td className='align-right'>{data.data.a1.price}</td>
                </tr>
                <tr>
                  <td>{data.data.a1.children.b1.description}</td>
                  <td className='align-right'>{data.data.a1.children.b1.price}</td>
                </tr>
                <tr>
                <td>{data.data.a1.children.b2.description}</td>
                  <td className='align-right'>{data.data.a1.children.b2.price}</td>
                </tr>
                </tbody>
            </table>
        </div>
            
      }
      {data ? "data loaded" : "still loading"}
      

        
        
    </div>
  )
}

export default Document