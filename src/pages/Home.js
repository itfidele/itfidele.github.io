const Home =()=>{
    return <>
        <div className="h-screen grid gap-4 place-content-center select-none w-full bg-gray-100 place-items-center">
            <img src='https://avatars.githubusercontent.com/u/30210556?v=4' className="w-28 border-2 border-gray-800 rounded-full p-2" alt=''/>
            <div className="text-[40px] text-gray-800 font-light">FideleDev</div>
            <div className='h-10 w-10 group animate-spin text-[14px] hover:w-auto hover:px-4 hover:text-gray-800 uppercase hover:animate-none transition-all hover:gap-2 hover:bg-gray-200 bg-gray-700 rounded-full cursor-pointer justify-center flex items-center'>
                
                <div className='h-5 w-5 group-hover:hidden bg-gray-500 border-dashed border-2 border-white rounded-full'></div>

                <ul className="flex gap-4">
                    <li className='hidden group-hover:inline-flex'>🛖&nbsp;About</li>
                    <li className=' hidden group-hover:inline-flex'>🖲️&nbsp;Projects</li>
                    <li className='hidden group-hover:inline-flex'>☎️&nbsp;Contact</li>
                    <li className='hidden group-hover:inline-flex'>🛠️&nbsp;Tools</li>
                </ul>
                
            </div>
        </div>

        <div className="border-2 flex items-center hover:bg-gray-500 transition-all cursor-pointer text-[24px] justify-center border-gray-800 my-2 absolute bottom-0 w-12 h-12 right-0 mx-2 rounded-full">
            <span>💡</span>
        </div>
    </>
}


export default Home