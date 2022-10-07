import React from "react"
import LinkButton from "../components/LinkButton"
import { MenuType } from "../types/menus"
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter';

const Home:React.FC=()=>{

    const menus:MenuType[] = [
        {
            name:"🛖 About"
        },
        {
            name:"🎓 Education"
        },
        {
            name:"🖲️ Projects"
        },
        {
            name:"☎️ Contact"
        },
        {
            name:"🛠️ Tools"
        }
    ]
    return (<React.Fragment>
        <div className="h-screen grid gap-4 place-content-center select-none w-full bg-gray-100 place-items-center">
            <img src='https://avatars.githubusercontent.com/u/30210556?v=4' className="w-28 border-2 border-gray-800 rounded-full p-2" alt=''/>
            <div className="text-[40px] text-gray-800 font-light">Fidele Dev</div>
            <div className="flex self-center space-x-4">
                <a href="https://github.com/itfidele"><GitHubIcon/></a>
                <a href="https://twitter.com/itfidele"><TwitterIcon/></a>
            </div>
            <div className='h-10 w-10 group animate-spin text-[14px] hover:w-auto hover:px-4 hover:text-gray-800 uppercase hover:animate-none transition-all hover:gap-2 hover:bg-gray-200 bg-gray-700 rounded-full cursor-pointer justify-center flex items-center'>
                
                <div className='h-5 w-5 group-hover:hidden bg-gray-500 border-dashed border-2 border-white rounded-full'>
                    
                </div>
                <div className="flex gap-4">
                    {menus.map(menu=><LinkButton text={menu.name} />)}
                </div>
                
            </div>
        </div>

        <div className="border-2 flex items-center hover:bg-gray-500 transition-all cursor-pointer text-[24px] justify-center border-gray-800 my-2 absolute bottom-0 w-12 h-12 right-0 mx-2 rounded-full">
            <span>💡</span>
        </div>
    </React.Fragment>)
    
}


export default Home