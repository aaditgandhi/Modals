import React from 'react'
import logo from './download.png'

function Modal() {
  return (
    <div className=" bg-slate-500 fixed w-screen h-screen flex justify-center items-center">
      <div className="w-3/5 h/4/5 rounded-xl bg-white ">
        <div>
          <img src={logo} alt="" width={60} height={60}/>
          <h1 className="">Recovery Token</h1>
        </div>
        <div>
          Store the recovery token in a safe space. If you lose your password it will allow you to reset the admin account and register again
        </div>
        <h2>6RNEaj6BmPbEVal9tbYU</h2>
        <div>
          <p>Warning! If you also your recovery token you will have to directly access your machine.</p>
        </div>
        <button>I've copied the recovery token</button>
      </div>
    </div>
  )
}

export default Modal