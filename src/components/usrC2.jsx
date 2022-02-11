import { Link } from 'react-router-dom'
// import logo from './src/logo.svg'
import axios from 'axios'
import { useState } from 'react'

let es = []

const response = (await axios.get(`http://localhost:1234/getusr`)).data

for (let i = 0; i < response.length; i++) { 
  if (response[i].id == window.sessionStorage.getItem("usrId")) {
    
    for (let j = 0; j < response[i].watched.length; j++) {
      es.push(<div key={j} ind={j} className='card w-64 h-56 bg-slate-50 drop-shadow-xl rounded-3xl m-20 text-center hover:scale-110 hover:-translate-y-1 duration-100'>
        <img className='cardImg w-64 h-40 object-cover rounded-2xl mb-5' src={ response[i].want[j].img } />
        <div className='cardTitle'>{ response[i].want[j].title }</div>
      </div>)
    }

    break
  }
}

export default function UsrComponent2() {

  return (
    <div className="UsrComponent font-mono text-center mb-52">

        <div className='relative popularity z-10 mb-20 font-semibold text-3xl text-center mt-20 text-transparent bg-clip-text bg-gradient-to-r from-gradient-blue to-gradient-purple'>보고 싶은 작품</div>

        <div className='relative cards flex items-center flex-wrap justify-center mb-52'>{ es }</div>

    </div>
  )
}