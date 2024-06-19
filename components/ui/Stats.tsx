"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 2,
        text: "Years of Experience",
    },
    {
        num: 15,
        text: "Projects completed",
    },
    {
        num: 8,
        text: "Technologies mastered",
    },
    {
        num: 250,
        text: "Code commits",
    },
];

const Stats = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-wrap md:flex-row gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-1 flex gap-4 items-center justify-center md:justify-start mb-6 md:mb-0"
                            >
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />
                                <p className="max-w-[150px] leading-snug text-white/80">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;
