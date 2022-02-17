import { Link } from 'react-router-dom'
// import logo from './src/logo.svg'
import Nav from '../components/nav'
import Footer from '../components/footer'
import axios from 'axios'

const response = (await axios.get(`https://sekai-backend.herokuapp.com/Adaily`)).data
// console.log(response)
console.log(window.sessionStorage.getItem("usrId"))

export default function Home() {

  let res = []
  for (let i = 0; i < 6; i++) { 
    res.push(<div key={i} ind={i} className='card w-64 h-80 bg-slate-50 drop-shadow-xl rounded-3xl m-20 text-center hover:scale-110 hover:-translate-y-1 duration-100'>
      <img className='cardImg w-64 h-64 object-cover rounded-2xl mb-5' src={ response[i].img } />
      <div className='cardTitle'>{ response[i].name }</div>
    </div>) 
  }

  function goList (e) {
    window.location.href = "/list"
  }

  return (
    <div className="Home font-mono text-center">
      <Nav />

      <div className='indexMain relative'>
        <div className='font-semibold text-2xl absolute z-10 left-1/4 top-96 text-transparent bg-clip-text bg-gradient-to-r from-gradient-blue to-gradient-purple'>더 쉽게 애니목록을 정리하세요.</div>
        <div className='font-bold text-7xl absolute z-10 left-1/4 top-430px text-transparent bg-clip-text bg-gradient-to-r from-gradient-blue to-gradient-purple'>Sekai</div>
        <img className="main w-full z-0 mb-52" src="img/bgImg2.png" />
      </div>

      <div className='popularity mb-20 font-semibold text-3xl text-center mt-20 text-transparent bg-clip-text bg-gradient-to-r from-gradient-blue to-gradient-purple'>인기</div>
      <div className='cards flex items-center flex-wrap justify-center'>

        { res }

      </div>

      <button className='moreBtn py-4 px-3 mb-52 text-white font-semibold bg-gradient-to-r from-gradient-blue to-gradient-purple mt-20 rounded-xl drop-shadow-xl hover:drop-shadow-2xl hover:-translate-y-1 duration-100' onClick={goList}>더 알아보기</button>

      <Footer />
    </div>
  )
}
