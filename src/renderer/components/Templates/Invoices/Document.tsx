import React,{useState, useEffect} from 'react'
import logo from "../../../../../assets/icon.png";
const fs = require('fs');
function Document({id}: {id:any}) {
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
                <TableContentParent data={data}/>
                {data.data.properties.map((x:string,index:number)=>                 
                <tr>
                  <td className={data.data.markup[index]}>{x}</td>
                  <td className='align-right'>{data.data.prices[index]}</td>
                </tr>
                )}
                <tr className=''>

                  <td></td>
                  <td className='align-right'><span className='bold align-left'>Total:</span> <span className='align-right'>{data.data.total}</span></td>
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

function TableContentParent({data} : {data:any}) {
  return(
    <>
                <tr>
                  <td className='underline name-first'>{data.data.name}</td>
                  <td className='align-right'>{data.data.price}</td>
                </tr>
                {Object.entries(data.data).map((key,value)=>{
                  key.forEach(keys => {
                    console.log(keys)
                  });
                })}
                
    </>
              

  )
}