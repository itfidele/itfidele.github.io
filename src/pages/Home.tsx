import React, { useState } from "react"
import Section from "../components/Section";
import smartagri from "../img/smartagri.png"
import ebenezeri from "../img/ebenezeri.png"
import makas_social from "../img/makas_social.png"
import LinkButton from "../components/LinkButton";
import kinjyambere_farm from '../img/kinjyambere_farm.png'

interface ProjectType{
    website:string,
    description?:string,
    link:string,
    image:string
}


const Home:React.FC=()=>{

    const [mode,changeMode] = useState(true);

    const changeTheme = (value:boolean)=>{
        changeMode(value)
    }

    const projects:ProjectType[] = [
        {
            website:"Smart-Agri",
            image:smartagri,
            link:"https://smartagri.org"
        },
        {
            website:"Ebenezer Healthcare Access",
            image:ebenezeri,
            link:"https://ebenezeri.org"
        },
        {
            website:"Makas Social Network",
            image:makas_social,
            link:"https://django-socialnetwork.herokuapp.com/"
        },
        {
          website:"Kijyambere Farms & Consulntant",
          image:kinjyambere_farm,
          link:"#"
      }
    ]


    return (<React.Fragment>
        <div className={mode ? "bg-gray-700 select-none grid" : "bg-gray-50 select-none grid sticky sticky-top "}>
        <div className={mode ? "p-4 flex w-full lg:w-8/12 mx-auto text-gray-200" :"p-4 flex w-full lg:w-8/12 mx-auto text-gray-800"} id="navbar">
          <div className='flex-1'>Fidele K.Cyisa</div>
          <div>
            <ul className='hidden md:inline-flex gap-4'>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              
              <li><a href="/">Uses</a></li>
              <li><a href="/">Contact</a></li>
              <li>
                <div className='flex'>
                  {mode?
                  <span className='cursor-pointer' onClick={() => changeTheme(false)}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-yellow-500 font-bold w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg></span>
                      
                    :
                    <span className='cursor-pointer' onClick={() => changeTheme(true)}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg></span>
                  }
                  
                  
                </div>
              </li>
            </ul>
            
          </div>
        </div>

        <div className='w-full lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-3 h-64 place-content-center place-items-center p-4' id='jumbotron'>
          <div className={mode ? "items-center col-start-1 text-gray-200 font-thin text-md lg:text-lg col-end-3" :"items-center col-start-1 text-gray-800 font-thin text-md lg:text-lg col-end-3"}>
            <span className='text-6xl'>👋</span>
            <span>Hello, I'm <label className="font-bold">Fidele Kirezi Cyisa!</label></span>
            <span>&nbsp; A Human first not a <del>robot</del> (interested to code some hardware) &nbsp;🤭 OSS believer 🙌, full stack web and apps developer who enjoys what he does just like playing video games (on my way to make one).
                <br/><br/>
                A proven ability to maintain and enhance company applications with the aim of improving operational functionality in line with business requirements.</span>
          </div>
          <div className="hidden md:flex order-1 justify-center items-center flex-col">
            <img loading="lazy" src="https://avatars.githubusercontent.com/u/30210556?v=4" className="w-28 md:w-32 hover:grayscale grayscale-0 transition-all rounded-full" alt="" />
          </div>
        </div>

        </div>
        <Section title='Projects'>
            <div className='grid mt-4 gap-4 grid-cols-2 lg:grid-cols-3'>
                {projects.map((project:ProjectType,index:number)=>{
                    return <div key={index} className='w-full relative group hover:cursor-pointer h-48 p-2 items-stretch text-3xl justify-center flex font-thin box-border bg-gray-400'>
                        <img loading="lazy" src={project.image} alt="" className="object-fit w-full"/>
                        <div className="absolute w-full group-hover:flex p-2 flex-wrap gap-2 top-0 bg-gray-100 h-full hidden transition-all duration-1000 items-center justify-center text-center">
                            <a href={project.link}>{project.website}</a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                        </div>
                    </div>
                })}
                
                <div className='w-full h-48 p-2 text-3xl justify-center items-center flex font-thin box-border bg-gray-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 text-gray-800 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                </div>
            </div>
        
        </Section>

        <Section title='Programming I use most'>
            <div className='w-10/12 py-2 grid text-gray-100 gap-2'>
            <div className='bg-blue-600 w-11/12 h-10 flex justify-center items-center uppercase'>Python&nbsp;95%</div>
            <div className='bg-green-600 w-8/12 h-10 flex justify-center items-center uppercase'>PHP&nbsp;90%</div>
            <div className='bg-yellow-800 w-9/12 h-10 flex justify-center items-center uppercase'>Javascript&nbsp;85%</div>
            <div className='bg-pink-600 w-7/12 h-10 flex justify-center items-center uppercase'>C++&nbsp;75%</div>
            </div>
        </Section>


        <div className="border-2 fixed flex items-center hover:bg-gray-500 transition-all cursor-pointer text-[24px] justify-center border-gray-800 my-2 bottom-0 w-12 h-12 right-0 mx-2 rounded-full">
            <span>💡</span>
        </div>
    </React.Fragment>)
    
}


export default Home