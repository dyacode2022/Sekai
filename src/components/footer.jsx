import { Link } from 'react-router-dom'
// import logo from '../src/logo.svg'
import '../Main.css'

export default function Footer() {

  return (
    <div className="Footer z-30">
        <footer className="flex justify-around py-16 drop-shadow-2xl bg-gradient-to-r from-gradient-blue to-gradient-purple">
            <div className="flex items-center">
                    <a className="text-2xl font-semibold text-white" href="/">ISekai Corp.</a>
                </div>
                
                <div className="flex items-center space-x-2">
                <a href="/" className=" text-xl text-white font-semibold">2022 DIA.</a>
                </div>
        </footer>
    </div>
  )
}