import { Link } from 'react-router-dom'
// import logo from './src/logo.svg'
import Nav from '../components/nav'
// import axios from 'axios'

// const response = (await axios.get(`http://localhost:1234/Adaily`)).data
// console.log(response)

export default function List() {

//   let res = []
//   for (let i = 0; i < 6; i++) { 
//     res.push(<div key={i} ind={i} className='card w-64 h-80 bg-slate-50 drop-shadow-xl rounded-3xl m-20 text-center hover:scale-110 hover:-translate-y-1 duration-100'>
//       <img className='cardImg w-64 h-64 object-cover rounded-2xl mb-5' src={ response[i].img } />
//       <div className='cardTitle'>{ response[i].name }</div>
//     </div>) 
//   }

  return (
    <div className="Home font-mono text-center">
      <Nav />
    </div>
  )
}