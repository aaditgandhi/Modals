import React from 'react'

const LogIn = () => {
  return (
    <div className=" bg-slate-500 fixed w-screen h-screen flex justify-center items-center">
        <div className="w-3/5 h-4/9 rounded-xl bg-white flex flex-col p-6 items-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Change host user password</h1>
                <p className="text-sm">
                    Please, change the host user password to a strong one that will protect your DAppNode from external attackers. This implies chnaging credentials for accessing your DAppNode via terminal(keyboard and screen directly connected to your box) or SSH with the user 'dappnode', so choose a strong password. Remember to store this password in a safe place. 
                </p>
            </div>
            <div className="w-full m-4">
                <p>New Password</p>
                <input type="text" className="border-s border-2 border-stone-800 rounded-sm w-full" placeholder='password' />
            </div>
            <div className="w-full">
                <p>Confirm new password</p>
                <input type="text" className="border-2 border-s border-stone-800 rounded-sm w-full" placeholder='new password' />
            </div>
            <div className='w-full mt-4 flex justify-between'>
                <button className="bg-cyan-500 py-2 px-4 rounded-sm">Back</button>
                <button className='bg-cyan-500 py-2 px-4 rounded-sm'>Skip</button>
            </div>
        </div>
    </div>
  )
}

export default LogIn