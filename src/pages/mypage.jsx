import { Link } from 'react-router-dom'
// import logo from './src/logo.svg'
import Nav from '../components/nav'
import axios from 'axios'

let viewUsrWatched = []
let es = []

const response = (await axios.get(`http://localhost:1234/getusr`)).data

for (let i = 0; i < response.length; i++) { 
  if (response[i].id == window.sessionStorage.getItem("usrId")) {
    viewUsrWatched = response[i].watched
    break
  }
}

if (viewUsrWatched > 6) {
  for (let i = 0; i < 6; i++) {
    let res = (await axios.get(`http://localhost:1234/Aget/${viewUsrWatched[i]}`)).data
  
    es.push(<div key={i} ind={i} className='card w-64 h-80 bg-slate-50 drop-shadow-xl rounded-3xl m-20 text-center hover:scale-110 hover:-translate-y-1 duration-100'>
      <img className='cardImg w-64 h-64 object-cover rounded-2xl mb-5' src={ res.img } />
      <div className='cardTitle'>{ res.name }</div>
      </div>) 
  }
} else {
  for (let i = 0; i < viewUsrWatched.length; i++) {
    let res = (await axios.get(`http://localhost:1234/Aget/${viewUsrWatched[i]}`)).data
  
    es.push(<div key={i} ind={i} className='card w-64 h-80 bg-slate-50 drop-shadow-xl rounded-3xl m-20 text-center hover:scale-110 hover:-translate-y-1 duration-100'>
      <img className='cardImg w-64 h-64 object-cover rounded-2xl mb-5' src={ res.img } />
      <div className='cardTitle'>{ res.name }</div>
      </div>) 
  }
}

export default function MyPage() {

  let viewUsrId = ''
  let viewUsrInform = ''
  
  for (let i = 0; i < response.length; i++) { 
    if (response[i].id == window.sessionStorage.getItem("usrId")) {
      viewUsrId = response[i].id
      viewUsrInform = response[i].info
      viewUsrWatched = response[i].watched
      break
    }
  }

  if (viewUsrId == '') {
    document.location.href = '/in'
  }

  console.log(viewUsrWatched)
  

  return (
    <div className="Mypage font-mono text-center">
      <Nav />

      <div className='info relative top-52 mb-96 flex justify-center items-center'>
        <div className='rounded-full w-72 h-72 bg-gray-200 mr-52'></div>
        <div>
          <div className='usrname font-semibold text-2xl mb-10'>{ viewUsrId }</div>
          <div className='usrname font-semibold text-2xl'>{ viewUsrInform }</div>
        </div>
      </div>

      <div className='flex justify-center relative'>
        <div className='w-5/6 h-0.5px bg-gray-300'></div>
      </div>

      <div className='popularity mb-20 font-semibold text-3xl text-center mt-20 text-transparent bg-clip-text bg-gradient-to-r from-gradient-blue to-gradient-purple'>이 유저가 본 작품</div>
      
      <div className='cards flex items-center flex-wrap justify-center'>

        { es }

      </div>

    </div>
  )
}