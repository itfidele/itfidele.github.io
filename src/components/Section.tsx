import React from 'react'


interface PropType{
    children?:any|any[],
    title:string,
    id?:string
}
const Section:React.FC<PropType> =(props:PropType)=>{
    return (
        <div id={props.id} className="mx-auto w-full lg:w-8/12 py-4">
            <div className='w-full px-2'>
                <h1 className="text-4xl uppercase font-thin">{ props.title }</h1>
                {props.children}
            </div>
        </div>
    )
}

export default Section;