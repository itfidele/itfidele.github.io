import React, { useState } from "react"
import Section from "../components/Section";
import smartagri from "../img/smartagri-screenshot.png"
import ebenezeri from "../img/ebenezeri-screenshot.png"
import agriset_image from "../img/agriset-screenshot.png"
import rnation from "../img/rnation.png"

interface ProjectType {
  id: number,
  website: string,
  description?: string,
  link: string,
  image: string
}


const Home: React.FC = () => {

  const [mode, changeMode] = useState(true);

  const changeTheme = (value: boolean) => {
    changeMode(value)
  }

  const projects: ProjectType[] = [
    {
      id: 4,
      website: "Smart-Agri",
      image: smartagri,
      link: "https://smartagri.org",
      description: "A platform that connects anyone to agricultural opportunities. We aim to help and assist people to find rewarding opportunities in Agriculture."
    },
    {
      id: 2,
      website: "Ebenezer Healthcare Access",
      image: ebenezeri,
      link: "https://ebenezeri.org",
      description: "Ebenezer Healthcare Access is a 501(c) (3) non profit organization based in Dayton Ohio. Ebenezer Healthcare Access helps you overcome language and cultural barriers in accessing healthcare services and other community resources."
    },
    {
      id: 3,
      website: "Agriset",
      image: agriset_image,
      link: "https://agriset.org",
      description: "A social organisation that aims to increase the number of role models in Agriculture and related fields. it helps and assist people to find decent opportunities in Agriculture and related fields to improve their lives."
    },
    {
      id:1,
      website:"The RNation Entertainment",
      image:rnation,
      link:"https://thernation.com/",
      description:"It is a full-service event planning and management company that specialises in corporate events, conferences, trades shows, and other special events. Our team of experienced event planners work closely with clients to create customized event solutions that meet their unique needs and budget."
    }
  ]


  return (<React.Fragment>
    <div className={mode ? "bg-gray-700 select-none grid" : "bg-gray-50 select-none grid sticky sticky-top "}>
      <div className={mode ? "p-4 flex w-full lg:w-8/12 mx-auto text-gray-200" : "p-4 flex w-full lg:w-8/12 mx-auto text-gray-800"} id="navbar">
        <div className='flex-1 flex items-center'> <img loading="lazy" src="https://avatars.githubusercontent.com/u/30210556?v=4" className="w-6 md:w-6 h-6 cursor-pointer hover:grayscale grayscale-0 transition-all rounded-full" alt="" />
          &nbsp; Fidele K.Cyisa</div>
        <div>
          <ul className='hidden md:inline-flex gap-4'>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#tools">Tools</a></li>
            <li>
              <div className='flex'>
                {mode ?
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

      <div id="about" className='w-full lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-3 md:h-[450px] place-content-center place-items-center p-4'>
        <div className={mode ? "items-center col-start-1 text-gray-200 font-thin text-md lg:text-lg col-end-3" : "items-center col-start-1 text-gray-800 font-thin text-md lg:text-lg col-end-3"}>

          <p className=" first-letter:text-6xl">👋 Hello, I'm <label className="font-bold">Fidele!</label>
            &nbsp; A Human first not a <del>robot</del> (interested to code some hardware) &nbsp;🤭 OSS believer (<a href="https://github.com/itfidele/FireDM" className="underline">check out this downloader</a>) 🙌, full stack web and apps developer who enjoys what he does.</p>
          <br />
          <p>A proven ability to maintain and enhance company applications with the aim of improving operational functionality in line with business requirements.</p>
        </div>
        <div className="hidden md:flex order-1 justify-center items-center flex-col">
          <img loading="lazy" src="https://avatars.githubusercontent.com/u/30210556?v=4" className="w-28 md:w-32 cursor-pointer hover:grayscale grayscale-0 transition-all rounded-full" alt="" />
        </div>
      </div>

    </div>

    <Section id="skills" title='🔭 Skills'>
      <div className='w-[98%] py-2 grid text-gray-100 gap-2'>
        <div className='bg-blue-600 w-[99%] py-4  h-5 flex justify-between px-6 items-center uppercase'>
          <div className="flex gap-4 font-bold">
            <div>🌐</div>
            <div>Web Development</div>
          </div>
          <div>98%</div>
        </div>
        
        <div className='bg-[#2CB7F7] w-[76%] py-4  h-5 flex justify-between px-6 items-center uppercase'>
          <div className="flex gap-4 font-bold">
            <div>📱</div>
            <div>App Development</div>
          </div>
          <div>76%</div>
        </div>
        <div className='bg-gray-800 w-[67%] py-4  h-5 flex justify-between px-6 items-center uppercase'>
          <div className="flex gap-4 font-bold">
            <div>🖥</div>
            <div>Desktop Development</div>
          </div>
          <div>67%</div>
        </div>

        <div className='bg-amber-600 w-[59%] py-4  h-5 flex justify-between px-6 items-center uppercase'>
          <div className="flex gap-4 font-bold">
            <div>🗄</div>
            <div>Devops</div>
          </div>
          <div>59%</div>
        </div>
       
      </div>
    </Section>

    <Section id="projects" title='🌐 Projects'>
      <div className='grid mt-4 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project: ProjectType) => {
          return <div key={project.id} className='w-full relative group hover:cursor-pointer h-[300px] lg:h-48 items-stretch text-3xl justify-center flex font-thin box-border'>
            <img loading="lazy" src={project.image} alt="" className="object-fit w-full" />
            <div className="absolute w-full group-hover:flex p-2 flex-wrap gap-2 top-0 bg-gray-100 h-full hidden transition-all duration-1000 items-center justify-center text-center">
              <a href={project.link}>{project.website}</a>
              <p className="text-sm line-clamp-3">{project.description}</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
            </div>
          </div>
        })}

        <a href="https://github.com/itfidele" className='w-full transition-all h-48 hover:bg-white p-2 text-3xl justify-center items-center flex font-thin box-border bg-gray-400'>
          <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="" />
        </a>
      </div>
    </Section>

    

    <Section id="tools" title='🛠 Tools & Programming'>
      <div className="flex py-4 flex-wrap items-center gap-6">
        <img alt="" src='https://static.djangoproject.com/img/logos/django-logo-negative.png' width='80' height='40' />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="80" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="80" height="40" />
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" alt="typescript" width="40" height="40" />
        <img src="https://dart.dev/assets/shared/dart-logo-for-shares.png?2" height={40} width={100} alt="" />
        <img src="" alt="" />
        <img height="40" width="40" alt="" src="https://drcarmenmartinez.com/wp-content/uploads/2018/08/rasa_logo_horizontal_purple-1.png"></img>
        <img height="40" alt="" width="40" src="https://chatimize.com/wp-content/uploads/2020/11/botpress-logo.png" />
        <img height="40" alt="" width="40" src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku&logoColor=white" />
        <img height="40" alt="" width="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
        <img height="40" width="40" alt="" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png"></img>
      </div>
    </Section>


    <div className="border-2 fixed flex items-center hover:bg-gray-500 transition-all cursor-pointer text-[24px] justify-center border-gray-800 my-2 bottom-0 w-12 h-12 right-0 mx-2 rounded-full">
      <span>💡</span>
    </div>
  </React.Fragment>)

}


export default Home