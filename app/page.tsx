// import Link from "next/link";
import NavBar from "./components/PageWrapper/NavBar/NavBar";
import CenterPiece from "./components/CenterPiece/CenterPiece";
import StoryCard from "./components/StoryCards/StoryCard";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import Timeline from "./components/Timeline/Timeline";
import TimelineComp from "./components/Timeline/TimelineComp";

// Home page for the website.
// Has the url: cody-taylor.com

export default function Home() {
  return (
    <>
      <PageWrapper>
        {/* Has the welcome centerpiece, an about me section, and a timeline of the projects and
        classes I've been involved in. */}
        
        <CenterPiece header="Welcome!">
          Venture below to find out more about me!
        </CenterPiece>
        <div className="divider" />

        <StoryCard
          title="About Me"
          image="/Pictures/Disney Photo.jpg"
          textRight={true}
        >
          I'm a currently a junior at the University of Central Florida studying
          Computer Science. I have strong interests in full stack development,
          software engineering, machine learning, and game development. I
          absolutely love seeing a project come together.
        </StoryCard>

        <div className="divider" />

        <Timeline background="bg-gray-200" 
          title="Development Timeline" 
          description="This is the timeline of my development with my career, education, and projects.">
          <TimelineComp
            title="Senior Year Fall Semester Classes"
            timePeriod="August 18th, 2025 - Now"
            description="The following are the current classes I am taking at the University of Central Florida
            for my senior year fall semester.">
              <ul className="list-disc">
                <li>CAP 4053 - AI for Game Programming</li>
                <li>COT 4210 - Discrete Structures 2</li>
                <li>COP 4331C - Processes for Object Oriented Software Development</li>
                <li>CAP 4720 - Computer Graphics</li>
                <li>COP 4934 - Senior Design 1</li>
              </ul>
          </TimelineComp>
          <TimelineComp 
            title="Employment: Amphicar Captain at The Boathouse" 
            timePeriod="June 16th, 2025 - Now" 
            description="I am currently employed as an amphicar captain at The Boathouse at Disney Springs. Here
            I have been developing communication and and interpersonal experience like no other job I have had
            before. As an amphicar captian, we are responsible for giving 20 minute tours to guests inside the amphicar 
            attraction. We are not given a script for these tours, so I don't find myself performing. Rather I often find that I 
            am directing the conversation between the me and the guests in necessary directions that would provide the guests 
            with a better experience. Although they are vastly different environments, I foresee these skills being tremendously 
            useful in a team leading situation for project management.">
          </TimelineComp>
          <TimelineComp
            title="Budget Management Project"
            timePeriod="May 2nd, 2025 - Now (In development)"
            description="The budget management project is a personal project in Python that manages
              a list of transactions and appropriatly designating it into a excel spreadsheet.">
          </TimelineComp>
          <TimelineComp 
            title="Personal Site" 
            timePeriod="April 7th, 2025 - Now (Still Updating!)" 
            description="My lastest project has been my personal site. You are on this right now!">
          </TimelineComp>
          <TimelineComp 
            title="Junior Year Summer Semester Classes" 
            timePeriod="May 12th, 2025 - July 31st, 2025" 
            description="The following are the classes I took at the University of Central Florida
            for my junior year summer semester.">
              <ul className="list-disc">
                <li>PHY 2049 - Physics 2 using Calculus</li>
                <li>MAC 2313 - Calculus with Analytic Geometry 3</li>
              </ul>
          </TimelineComp>
          <TimelineComp 
            title="Junior Year Spring Semester Classes" 
            timePeriod="January 8th, 2025 - April 29th, 2025" 
            description="The following are the classes I took at the University of Central Florida
            for my junior year spring semester.">
              <ul className="list-disc">
                <li>COT 3100C - Introduction to Discrete Structures</li>
                <li>COP 3402 - Systems Software</li>
                <li>COP 3503C - Computer Science 2</li>
                <li>CAP 4611 - Algorithms for Machine Learning</li>
              </ul>
          </TimelineComp>
          <TimelineComp 
            title="Junior Year Fall Semester Classes" 
            timePeriod="August 19th, 2024 - December 6th, 2024" 
            description="The following are the classes I took at the University of Central Florida
            for my junior year fall semester.">
              <ul className="list-disc">
                <li>CDA 3103C - Computer Logic and Organization</li>
                <li>ENC 3241 - Technical Writing</li>
                <li>CIS 3360 - Security in Computing</li>
                <li>COP 3502C - Computer Science 1</li>
              </ul>
          </TimelineComp>
          <TimelineComp 
            title="Transfer to University of Central Florida" 
            timePeriod="August 19th, 2024" 
            description="Following my sophomore spring semester in 2024, I transfered to the University
            of Central Florida. Although I left Florida Polytechnic University, I am extremely thankful
            for my time there. The environment pushed my aspiration and ambition forward in a way that 
            another school likely would have not. "
            end={true}>
          </TimelineComp>
        </Timeline>

      </PageWrapper>
    </>
  );
}
