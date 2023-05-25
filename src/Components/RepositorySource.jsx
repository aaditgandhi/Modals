import React from 'react'
import clock from './icons8-clock-24.png'
import requirements from './icons8-requirements-30.png'
import shield from './icons8-shield-24.png'
import {AiFillClockCircle} from 'react-icons/ai'
import {HiCircleStack} from 'react-icons/hi2'
import {BsShieldCheck} from 'react-icons/bs'

const RepositorySource = () => {
  return (
    <div className=" bg-slate-500 fixed w-screen h-screen flex justify-center items-center">
        <div className="w-3/5 h-4/9 rounded-xl bg-white flex flex-col p-6 items-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Repository Source</h1>
                <p className="text-sm">
                    Official DAppNode Packages(DNPs) and Community Packages(Public) are published in a decentralized repository. To access this repository, DAppNode uses smart contracts on the Ethereum Blockchain.
                </p>
                <p className="text-sm">
                    You can either connect to a remote Ethereum node maintained by DAppNode or easily run your own node to promote decentralization.
                </p>
            </div>
            <div className="flex w-full justify-between mt-6 gap-4" >
                <div className="rounded-sm border-2 border-s border-stone-900 flex flex-col py-2 px-6 w-full">
                    <div className='text-center '>
                        <h2 className="font-semibold text-cyan-500">Remote</h2>
                        <p className="text-xs border-b-2 pb-2 border-gray-400">Public node API maintained by DappNode</p>
                    </div>
                    {/* <span className='w-60 h-[1px] bg-gray-500'></span> */}
                    <div className="flex width-full justify-around gap-4 pt-4">
                        <div className="flex flex-col justify-center items-center">
                            <AiFillClockCircle className="fill-cyan-500" />
                            <p className="text-xs">Instant</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <HiCircleStack className="fill-cyan-500"/>
                            <p className="text-xs">No requirements</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <BsShieldCheck />
                            <p className='text-xs'>Centralized trust</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-sm border-2 border-s border-stone-900 flex flex-col py-2 px-6 w-full">
                    <div className='text-center '>
                        <h2 className="font-semibold ">Full Node</h2>
                        <p className="text-xs border-b-2 pb-2 border-gray-400">Your own Ethereum node without 3rd parties</p>
                    </div>
                    {/* <span className='w-60 h-[1px] bg-gray-500'></span> */}
                    <div className="flex width-full justify-around gap-4 pt-4">
                        <div className="flex flex-col justify-center items-center">
                            <AiFillClockCircle className="fill-cyan-500"/>
                            <p className="text-xs">File sync</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <HiCircleStack />
                            <p className="text-xs">High requirements</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <BsShieldCheck className="fill-cyan-500"/>
                            <p className='text-xs'>Fully decentralized</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between mt-4">
                <button className="bg-cyan-500 rounded-sm py-2 px-4">Back</button>
                <button className="bg-cyan-500 rounded-sm py-2 px-4">Next</button>
            </div>
        </div>
    </div>
  )
}

export default RepositorySource