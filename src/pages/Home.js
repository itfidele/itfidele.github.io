const Home =()=>{
    return <>
        <div className="h-screen grid gap-4 place-content-center w-full bg-gray-100 place-items-center">
            <div className="text-[40px] text-gray-800 font-light">FideleDev</div>
            <div className='h-10 w-10 group animate-spin text-[14px] hover:w-auto hover:px-4 hover:text-gray-800 uppercase hover:animate-none transition-all hover:gap-2 hover:bg-gray-200 bg-gray-700 rounded-full cursor-pointer justify-center flex items-center'>
                
                <div className='h-5 w-5 group-hover:hidden bg-gray-500 border-dashed border-2 border-white rounded-full'></div>

                <div className='hidden group-hover:inline-flex'>🛖&nbsp;About</div>
                <div className=' hidden group-hover:inline-flex'>🖲️&nbsp;Projects</div>
                <div className='hidden group-hover:inline-flex'>☎️&nbsp;Contact</div>
                <div className='hidden group-hover:inline-flex'>🛠️&nbsp;Tools</div>
            </div>
            <p></p>
        </div>
    </>
}


export default Home