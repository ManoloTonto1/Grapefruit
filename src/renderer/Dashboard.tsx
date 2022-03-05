import {useState} from 'react'
import {Example} from './components/menu/Example'
import './node.js'
function Dashboard() {
  const [count, setCount] = useState(0)


  return (

    <Example/>
  )
}

export default Dashboard;