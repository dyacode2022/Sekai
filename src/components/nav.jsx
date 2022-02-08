import { Link } from 'react-router-dom'
// import logo from '../src/logo.svg'
import '../Main.css'

export default function Nav() {

  return (
    <div className="Nav">
        <nav className="flex justify-around py-8 bg-white drop-shadow-xl">
            <div className="flex items-center">
                <a className="text-2xl font-semibold text-blue-500" href="/">Sekai</a>
            </div>
            <div className="items-center hidden space-x-8 lg:flex">
                <a href="/">Home</a>
                <a href="/">List</a>
                <a href="/">Github</a>
                <a href="/in">Signin</a>
                <a href="/">Signup</a>
            </div>
            <div className="flex items-center space-x-2">
              <a href="/" className="p-2 bg-white">User</a>
            </div>
        </nav>
    </div>
  )
}