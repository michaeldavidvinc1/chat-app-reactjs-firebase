import React from 'react'
import {auth} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Signin from './SignIn'
import LogOut from './LogOut'

const style = {
  nav: `bg-gray-800 h-20 flex justify-between item-center p-4`,
  heading: `text-white text-3xl`
}

const Navbar = () => {

  const [user] = useAuthState(auth)
  console.log(user)

  return (
    <div className={style.nav}> 
      <h1 className={style.heading}>Chat App</h1>
      {user ? <LogOut /> : <Signin />}
    </div>
  )
}

export default Navbar