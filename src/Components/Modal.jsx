import React from 'react'
import logo from './download.png'

function Modal() {
  return (
    <div className=" bg-slate-500 fixed w-screen h-screen flex justify-center items-center">
      <div className="w-96 h-5/6 rounded-xl bg-white flex flex-col p-6 items-center">
        <div className='items-center justify-center'>
          <img src={logo} alt="" width={60} height={60} className='m-auto mt-4 mb-4'/>
          <h1 className="text-2xl text-center">Recovery Token</h1>
        </div>
        <div className='m-6 text-center text-xs'>
          Store the recovery token in a safe space. If you lose your password it will allow you to reset the admin account and register again
        </div>
        <h2 className='text-center mb-6'>6RNEaj6BmPbEVal9tbYU</h2>
        <div className='text-center bg-yellow-200 rounded-sm px-4 py-2'>
          <p className='text-sm'>Warning! If you also your recovery token you will have to directly access your machine.</p>
        </div>
        <button className=' bg-cyan-500 rounded-sm px-20 py-2 mt-6 text-center text-sm'>I've copied the recovery token</button>
      </div>
    </div>
  )
}

export default Modal