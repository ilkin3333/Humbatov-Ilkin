"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaPhp,
    FaLaravel,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiNextdotjs,
} from "react-icons/si";

const about = {
    title: "About Me",
    description: "I'm a passionate web developer with a strong focus on building scalable, efficient, and user-friendly applications.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Humbatov Ilkin",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+994) 70 380 33 33",
        },
        {
            fieldName: "Experience",
            fieldValue: "2+ Years",
        },
        {
            fieldName: "Linkedin",
            fieldValue: "ilkin3333",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Azerbaijani",
        },
        {
            fieldName: "Email",
            fieldValue: "ilkin.humbetov.99@mail.ru",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "Azerbaijani, English, Turkish",
        },
    ]
};

//experience data

const experience ={
    icon: '/assets/resume/badge.svg',
    title: "My Experience",
    description: "Here are some of my notable experiences",
    items: [
{
    company: "CodeMarketing",
    position: "Full Stack Developer",
    duration: "2024 - Present "
},

    ]
};
//education data
const education ={
    icon: '/assets/resume/cap.svg',
    title: "My Education",
    description: "Here are some of my notable education",
    items: [
        {
            institution: "Code Marketing",
            degree: "Full Stack Web Development",
            duration: "03.2024 - Present "
        },
        {
            institution: "Evocoding",
            degree: "FrontEnd Web Development",
            duration: "10.2023 - 02.2024 "
        },
        {
            institution: "Online Course Platform",
            degree: "FrontEnd Web Development",
            duration: "06.2023 - 09.2023 "
        },
        {
            institution: "UNEC",
            degree: "World Economy",
            duration: "2016 - 2020 "
        },
        
        
    ]
};

//skils data
const skills ={
    title: "My Skills",
    description: "Here are some of my notable skills",
    skilList:[
        {
            icon: <FaHtml5/>,
            name: "html 5"
        },
        {
            icon: <FaCss3/>,
            name: "css3"
        },
        {
            icon: <FaJs/>,
            name: "javascript"
        },
        {
            icon: <FaReact/>,
            name: "react.js"
        },
        
        {
            icon: <FaPhp/>,
            name: "php"
        },
        {
            icon: <FaLaravel/>,
            name: "laravel"
        },
    ],

};


import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
    } from '@/components/ui/tooltip'

    import { ScrollArea } from "@radix-ui/react-scroll-area";
    import { motion } from "framer-motion";

const Resume = () => {
    return <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{delay:2.4, duration: 0.4, ease:'easeIn'  }}

  
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
        <div className="container mx-auto">
            <Tabs defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
            >
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>

{/*content */}
                <div className="min-h-[70vh] w-full">
{/*experience */}
<TabsContent value="experience" className="w-full">
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{experience.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
        <ScrollArea className="h-[400px]">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {experience.items.map((item, index)=>{
                    return (
                    <li key={index} className="bg-[#232329] 
                    h-[184px] py-6 px-10 rounded-xl flex
                     flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px]
                        text-center lg:text-left
                        ">{item.position}</h3>
                        <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                        </div>
                    </li>
                    );
                })}
            </ul>
        </ScrollArea>
    </div>
</TabsContent>
{/*education */}
<TabsContent value="education" className="w-full">
<div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold ">{education.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
        <ScrollArea className="h-[400px]">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {education.items.map((item, index)=>{
                    return (
                    <li key={index} className="bg-[#232329] 
                    h-[184px] py-6 px-10 rounded-xl flex
                     flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px]
                        text-center lg:text-left
                        ">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                        </div>
                    </li>
                    );
                })}
            </ul>
        </ScrollArea>
    </div>
</TabsContent>
{/*skills */}
<TabsContent value="skills" className="w-full h-full">
    <div className="flex flex-col gap-[30px]"></div>
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
<h3 className="text-4xl font-bold">{skills.title}</h3>
<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-8">{skills.description}</p>
    </div>
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4
    xl:gap-[30px]">
        {skills.skilList.map((skill, index)=>{
            return <li key={index}>
                <TooltipProvider delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl
                        flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent
                            transition-all duration-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">  {skill.name}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </li>
        })}
    </ul>
</TabsContent>
{/*about */}
<TabsContent value="about" className="w-full text-center xl:text-left">
    <div className="flex flex-col gap-[30px]">
        <h3 className="text-4xl font-bold">{about.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
        mx-auto xl:mx-0">
            {about.info.map((item, index)=>
            {
                return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                    <span className="text-white/60">
                        {item.fieldName}
                    </span>
                    <span className="text-xl">
                        {item.fieldValue}
                    </span>
                </li>
            })}
        </ul>
    </div>
</TabsContent>

                </div>
            </Tabs>
        </div>
       </motion.div>
};


export default Resume;
