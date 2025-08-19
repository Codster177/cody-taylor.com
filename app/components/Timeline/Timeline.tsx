import React, { ReactNode } from "react";
import StoryCard from "../StoryCards/StoryCard";

interface Props{
  children: ReactNode
  background: string
  title: string
  description?: string
}

const Timeline = ({children, background, title, description = ""}: Props) => {
  let descriptionBool = false
  if (description != "")
  {
    descriptionBool = true
  }
  return (
    <>
    <section className={background + "min-h-screen pt-20 mb-5"}>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-7">{title}</h1>
        {descriptionBool && (<p className="text-2xl mb-5">{description}</p>)}
      </div>
      <div>
        {children}
      </div>
    </section>
    </>
  )
};


export default Timeline;
