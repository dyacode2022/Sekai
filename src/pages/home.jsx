import { Link } from 'react-router-dom'
// import logo from './src/logo.svg'
import Nav from '../components/nav'

export default function Home() {

  return (
    <div className="Home font-mono mb-52">
      <Nav />

      <div className='indexMain relative'>
        <div className='font-semibold text-2xl absolute z-10 left-1/4 top-96 text-transparent bg-clip-text bg-gradient-to-r from-gradient-blue to-gradient-purple'>더 쉽게 애니목록을 정리하세요.</div>
        <div className='font-bold text-7xl absolute z-10 left-1/4 top-430px text-transparent bg-clip-text bg-gradient-to-r from-gradient-blue to-gradient-purple'>Sekai</div>
        <img className="main w-full z-0 mb-52" src="img/bgImg2.png" />
      </div>

      <div className='popularity mb-20 font-semibold text-3xl text-center mt-20 text-transparent bg-clip-text bg-gradient-to-r from-gradient-blue to-gradient-purple'>인기</div>
      <div className='cards flex items-center flex-wrap justify-center'>
        <div className='card w-64 h-80 bg-slate-300 drop-shadow-xl rounded-3xl m-20'></div>
        <div className='card w-64 h-80 bg-slate-300 drop-shadow-xl rounded-3xl m-20'></div>
        <div className='card w-64 h-80 bg-slate-300 drop-shadow-xl rounded-3xl m-20'></div>
        <div className='card w-64 h-80 bg-slate-300 drop-shadow-xl rounded-3xl m-20'></div>
        <div className='card w-64 h-80 bg-slate-300 drop-shadow-xl rounded-3xl m-20'></div>
        <div className='card w-64 h-80 bg-slate-300 drop-shadow-xl rounded-3xl m-20'></div>
      </div>
    </div>
  )
}