import { useState } from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import axios from 'axios'

export default function Signup() {

  const [name, setName] = useState('')
  const [pawd, setPawd] = useState('')
  const [notice, setNotice] = useState(false)

  async function onRegister(e) {

    const usr_res = (await axios.get(`https://sekai-backend.herokuapp.com/getusr`)).data

    if (name == '' || name == null || pawd == '' || pawd == null) {
        console.log('u cant sign up')
    } else {
        let a = true

        for (let i = 0; i < usr_res.length; i++) {

            if (usr_res[i].id == name) {
                a = false
            }
        }

        if (a) {
            setNotice(true)
            axios.get(`https://sekai-backend.herokuapp.com/signup/${name}/${pawd}`)
        } else if (!a) {
            console.log('already exist.')
            alert('Already exist.')
        }
    }

    document.location.href = '/'

  }

  const onUsr = (e) => {
    setName(e.target.value)
  }

  const onPw = (e) => {
    setPawd(e.target.value)
  }

  return (
    <div className="Signup font-mono">
      <Nav />

      <div className='loginMain relative'>
        <div className='font-semibold text-2xl absolute z-10 left-1/4 top-96 text-transparent bg-clip-text bg-gradient-to-r from-gradient-blue to-gradient-purple'>오늘도 데이터베이스 낭비</div>

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
            <button className="bg-purple-400 text-white font-bold py-2 px-4 rounded" type="button" onClick={onRegister}>Sign Up</button>
            <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="/in">Do you have an account?</a>
          </div>
        </div>

        <img className="main w-full z-0 " src="img/bgImg2.png" />
      </div>

      {/* { notice && <div className="absolute m-20 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert"><p className="font-bold">Warn</p><p>Already exist.</p></div> || !notice && <></> } */}

      <Footer />
    </div>
  )
}