import { Link } from 'react-router-dom'
// import logo from './src/logo.svg'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Past from '../components/usrC'
import Want from '../components/usrC2'
import axios from 'axios'
import { useState } from 'react'

let viewUsrId = ''
let viewUsrInform = ''

const response = (await axios.get(`https://sekai-backend.herokuapp.com/getusr`)).data

for (let i = 0; i < response.length; i++) { 
  if (response[i].id == window.sessionStorage.getItem("usrId")) {
    viewUsrId = response[i].id
    viewUsrInform = response[i].info

    break
  }
}

export default function MyPage() {

  const [page, setPage] = useState(true)

  const tabBtn = (e) => {
    console.log(e.target.id)

    if (e.target.id == "future") {
      setPage(false)

      let el = document.getElementById('future')
      el.style.background = ""
      
    } else if (e.target.id == "now") {
      setPage(true)
    }
  }
  
  if (viewUsrId == '') {
    document.location.href = '/in'
  }

  return (
    <div className="Mypage font-mono text-center">
      <Nav />

      {/* <img className="main w-full absolute" src="img/bgImg2.png" /> */}

      <div className='info relative top-52 mb-96 flex justify-center items-center'>
        <div className='rounded-full w-72 h-72 bg-gray-200 mr-52'></div>
        <div>
          <div className='usrname font-semibold text-2xl mb-10'>{ viewUsrId }</div>
          <div className='usrname font-semibold text-2xl'>{ viewUsrInform }</div>
        </div>
      </div>

      <div className='flex justify-center relative'>
        <div className='w-5/6 h-0.5px bg-gray-300 mb-64'></div>
      </div>

      <ul className="flex flex-wrap justify-center">
          <div className="mr-2">
              <button onClick={tabBtn} id={"now"} className="inline-block py-3 px-4 text-lg font-semibold text-center text-gray-500 hover:bg-gray-100 rounded-lg active">정주행</button>
          </div>
          <li className="mr-2">
              <button onClick={tabBtn} id={"future"} className="inline-block py-3 px-4 text-lg font-semibold text-center text-gray-500 rounded-lg hover:bg-gray-100">보고싶다</button>
          </li>
      </ul>

      { page && <Past /> || !page && <Want /> }
      {/* { !page && <Want /> } */}

      <Footer />

    </div>
  )
}