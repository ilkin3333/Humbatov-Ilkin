"use client";

import {BsArrowDownRight} from 'react-icons/bs';
import Link from "next/link";



const services =[
{
    num: '01',
    title: 'Web Development',
    desc: 'We build fast, scalable, and secure websites that meet your business goals.',
    href: ""
},
{
    num: '02',
    title: 'UI/UX Design',
    desc: 'We craft intuitive and visually stunning interfaces that delight users.',
    href: ""
},
{
    num: '03',
    title: 'Logo Design',
    desc: 'We create unique and memorable logos that represent your brand identity',
    href: ""
},
{
    num: '04',
    title: 'SEO',
    desc: 'We optimize your website for search engines to increase visibility and drive traffic',
    href: ""
}


];

import {delay, motion} from "framer-motion"

const Services  =() =>{
    return <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
 <div className='container mx-auto'>
<motion.div initial = {{opacity: 0}}
animate = {{
    opacity: 1,
    transition: {delay: 2.4,  duration:0.4, ease: "easeIn"},
}}
className='grid frid-cols-1 md:grid-cols-2 gap-[60px]'
>

{services.map((service, index) => {
    return <div key= {index} className='flex flex-col justify-center gap-6 group'>

        {/* top*/}
        <div className='w-full flex justify-between items-center'  >
            <div className='text-5xl font-extrabold text-outline text-transparent
             group-hover:text-outline-hover transition-all duration-500'>
                {service.num}</div>
            <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white
            flex justify-center items-center group-hover:bg-accent transition-all duration-500
            hover:-rotate-45'>
            <BsArrowDownRight className='text-primary text-3xl'/>
            </Link>
        </div>
        {/*heading basliq */}
        <h2 className='text-[42px] font-bold leading-none text-white
        group-hover:text-accent transition-all duration-500'>
            {service.title} </h2>
        {/*description */}
        <p className='text-white/60'>{service.desc}</p>
        {/* border */}
        <div className='border-b border-white/20 w-full'></div>
    </div>
})}
</motion.div>

 </div>
</section>
    
};
export default Services