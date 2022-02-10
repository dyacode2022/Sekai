import { Link } from 'react-router-dom'
// import logo from './src/logo.svg'
import Nav from '../components/nav'
import axios from 'axios'
import laftel from 'laftel.js'

const response = (await axios.get(`http://localhost:1234/getusr`)).data

export default function MyPage() {

  let viewUsrId = ''
  let viewUsrInform = ''

  for (let i = 0; i < response.length; i++) { 
    if (response[i].id == window.sessionStorage.getItem("usrId")) {
      viewUsrId = response[i].id
      viewUsrInform = response[i].info
    }
  }
  if (viewUsrId == '') {
    document.location.href = '/in'
  }

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
      
    </div>
  )
}