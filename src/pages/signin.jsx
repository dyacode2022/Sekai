import { useState } from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import axios from 'axios'

export default function Signin() {

  const [name, setName] = useState('')
  const [pawd, setPawd] = useState('')

  async function onLogin(e) {
    const response = (await axios.get(`https://sekai-backend.herokuapp.com/getusr`)).data
    // console.log(response)

    for (let i = 0; i < response.length; i++) {
      if (response[i].id == name) {
        if (response[i].pw == pawd) {
            // console.log('Login Yes')
            window.sessionStorage.setItem("usrId", name)
            document.location.href = '/'; break
        }
      }
    }

  }

  const onUsr = (e) => {
    setName(e.target.value)
  }

  const onPw = (e) => {
    setPawd(e.target.value)
  }

  return (
    <div className="Home font-mono">
      <Nav />

      <div className='loginMain relative'>
        <div className='font-semibold text-2xl absolute z-10 left-1/4 top-96 text-transparent bg-clip-text bg-gradient-to-r from-gradient-blue to-gradient-purple'>로그인 후 서비스를 이용하세요.</div>

        <div className="bg-white drop-shadow-2xl rounded absolute left-1/4 w-96 p-10 top-430px pb-8">
          <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2">Username</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="E-mail" onChange={onUsr} value={name} />
          </div>
          <div className="mb-6">
            <label className="block text-grey-darker text-sm font-bold mb-2">Password</label>
            <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="Password" onChange={onPw} value={pawd} />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-purple-400 text-white font-bold py-2 px-4 rounded" type="button" onClick={onLogin}>Sign In</button>
            <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="/up">Don't have an account?</a>
          </div>
        </div>

        <img className="main w-full z-0 " src="img/bgImg2.png" />
      </div>

      <Footer />
    </div>
  )
}