import React from 'react';
import { Header } from '../../components/header'
import home from './../../video/header_animation_updated.mp4'

export const Home = () => {

  return (
    <>
    <Header />
    <div className='flex flex-row w-screen h-screen bg-[#ffffff]'>
      <div className='flex flex-col w-[40%] h-[100%] items-end justify-center '>
        <div className='flex flex-col w-[440px] gap-7'>
          <p className='text-[53px] font-[500] leading-[53px] font-[Google sans]'>All  of  Google,  working  for  you</p>
          <p className='text-[16px] font-[300] font-[roboto]'>
            Sign in to your Google Account, and get the most out of all the 
            Google services you use. Your account helps you do more by
            personalizing your Google experience and offering easy
            access to your most important information from anywhere.
          </p>
        </div>
      </div>
      <div className='flex w-[60%] h-[100%] justify-center items-center'>
        <video src={home} width="750" height="350" data-loop-start-time="3" autoPlay muted/>
      </div>
    </div>
    </>
  )
}
