import { Link } from 'react-router-dom'
// import logo from '../src/logo.svg'
import '../Main.css'

export default function Nav() {

  return (
    <div className="Nav">
        <nav className="flex justify-around py-6 drop-shadow-2xl bg-gradient-to-r from-gradient-blue to-gradient-purple fixed inset-x-0 opacity-90 z-10">
            <div className="flex items-center">
                <a className="text-2xl font-semibold text-white" href="/">Sekai</a>
            </div>
            <div className="items-center hidden space-x-8 lg:flex">
                <a href="/" className="text-lg text-white font-semibold">List</a>
                <a href="/in" className="text-lg text-white font-semibold">Signin</a>
                <a href="/" className="text-lg text-white font-semibold">Signup</a>
            </div>
            <div className="flex items-center space-x-2">
              <a href="/" className=" text-xl text-white font-semibold">User</a>
            </div>
        </nav>
    </div>
  )
}