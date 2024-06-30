import React, { useState } from "react"
import Section from "../components/Section";
import smartagri from "../img/smartagri-screenshot.png"
import ebenezeri from "../img/ebenezeri.png"
import agriset_image from "../img/agriset-screenshot.png"
import rnation from "../img/rnation.png"
import hugamaraimg from "../img/hugamara.png"
import gheinsights from "../img/gheinsights.png"
import stephenspictures from "../img/stephenspictures.png"
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
      link: "https://www.ebenezeri.org",
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
    },
    {
      id:6,
      website:"GHE Insights Consultanting",
      image:gheinsights,
      link:"https://www.ghe-insights.com/",
      description:"It's a research and communication consultancy specializing in health economics, outcomes research, health technology assessment (HTA), access to medical innovation, and health policy."
    },
    {
      id:8,
      website:"Stephens Pictures",
      image:stephenspictures,
      link:"https://stephenspicturesstudio.com/",
      description:"Stephens Pictures Studio which is specialize in capturing the essence of life’s most precious moments through our professional photography and videography services."
    },
    {
      id:0,
      website:"Hugamara",
      image:hugamaraimg,
      link:"https://hugamara.com/",
      description:"Brave minds re-imagining African Innovation"
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
            <a href={project.link} target="_blank" className="absolute w-full group-hover:flex p-2 flex-wrap gap-2 top-0 bg-gray-100 h-full hidden transition-all duration-1000 items-center justify-center text-center" rel="noreferrer">
              <div>{project.website}</div>
              <p className="text-sm line-clamp-3">{project.description}</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
            </a>
          </div>
        })}

        <a href="https://github.com/itfidele" className='w-full transition-all h-48 hover:bg-white p-2 text-3xl justify-center items-center flex font-thin box-border bg-gray-400'>
          <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="" />
        </a>
      </div>
    </Section>

    

    <Section id="tools" title='🛠 Tools & Programming'>
      <div className="flex py-4 flex-wrap items-center gap-6">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" alt="" width='60' height='40' />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="" width='60' height='40' />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" alt="" width='60' height='40'  />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/2560px-Webysther_20160423_-_Elephpant.svg.png" alt=""  width='60' height='40' />
        <img src="https://d1uxiwmpc9j4yg.cloudfront.net/images/all/flutter5786_1687632217.jpeg" alt="" width="60" height="40" />
        <img src="https://www.mlq.ai/content/images/2023/06/Screenshot-2023-06-15-at-8.15.36-PM.png" alt=""  width="60" height="40"  />
        <img alt="" src='https://cdn.worldvectorlogo.com/logos/django.svg' width='60' height='30' />
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="60" height="40"  alt="" />
        <img src="https://ionicframework.com/docs/icons/logo-react-icon.png" alt="" width="60" height="40" />
        <img src="https://assets.stickpng.com/images/5847f40ecef1014c0b5e488a.png" alt="" width="60" height="40" />
        <img src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png" width="60" height="40" alt="" />
        <img src="https://allvectorlogo.com/img/2017/02/microsoft-sql-server-logo.png" alt="" width="90" height="40" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Qt_logo_2016.svg/2560px-Qt_logo_2016.svg.png" width="60" height="40" alt="" />
        <img src="https://orcun-gokbulut.gallerycdn.vsassets.io/extensions/orcun-gokbulut/qml-debug/0.1.0/1645428167537/Microsoft.VisualStudio.Services.Icons.Default" width="60" height="40" alt="" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Cmake.svg/1200px-Cmake.svg.png" width="60" height="40"  alt="" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" width="60" height="40"  alt="" />
        <img src="https://images.saasworthy.com/rasa_3245_logo_1664877941_se4iq.png" width="60" height="40" alt="" />
        <img src="https://seeklogo.com/images/D/dialogflow-logo-534FF34238-seeklogo.com.png" width="60" height="40" alt="" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" width="60" height="40" alt="" />
       
      </div>
    </Section>


    <div className="border-2 fixed flex items-center hover:bg-gray-500 transition-all cursor-pointer text-[24px] justify-center border-gray-800 my-2 bottom-0 w-12 h-12 right-0 mx-2 rounded-full">
      <span>💡</span>
    </div>
  </React.Fragment>)

}


export default Home