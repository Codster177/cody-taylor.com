import { truncate } from 'fs'
import React, { ReactNode } from 'react'

interface Props{
    title: string
    timePeriod: string
    description?: string
    children?: ReactNode
    end?: boolean
    height?: string
}

const TimelineComp = ({title, timePeriod, description, children, end = false, height = ""}: Props) => {
    let descBool = (description=="") ? false : true
    function isEnd()
    {
        if (!end)
        {
            return "before:absolute before:left-[11px] before:w-[2px] before:bg-white self-center before:h-full"
        }
        else
        {
            return "before:absolute before:left-[11px] before:w-[2px] before:bg-white self-center"
        }
    }
    return (
    <div className="relative gap-16 flex ml-14">
        <div className={isEnd()}>
            <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" className="bi bi-circle-fill">
            <circle cx="12" cy="12" r="12" fill="white"/>
            </svg>
        </div>
        <div className="hero bg-base-200 min-h-75 max-h-full px-25 mb-5">
            <div className='hero-content flex-col lg:flex-row min-w-full justify-start'>
                <div>
                    <h1 className='text-4xl font-bold'>{title}</h1>
                    <h2 className='text-2xl italic'>{timePeriod}</h2>
                    {descBool && (<p className='py-6'>{description}</p>)}
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TimelineComp