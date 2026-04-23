import React from 'react';
import { HiOutlineCode, HiOutlineDatabase, HiOutlineServer, HiOutlineLockClosed } from "react-icons/hi";

const Servese = () => {
    const services = [
        {
            id: 1,
            title: "Frontend Development",
            main: "Building responsive and interactive user interfaces using React.js and Tailwind CSS.",
            icon: <HiOutlineCode size={24} />,
            features: ["Responsive design", "React Hooks & State", "API Integration"],
            tech: ["React.js", "Tailwind"]
        },
        {
            id: 2,
            title: "Backend Development",
            main: "Developing stable server-side applications using Node.js and Express.js.",
            icon: <HiOutlineServer size={24} />,
            features: ["RESTful API Design", "Error Handling", "Middleware Logic"],
            tech: ["Node.js", "Express"]
        },
        {
            id: 3,
            title: "Database Management",
            main: "Managing data efficiently using MongoDB and Mongoose for MERN apps.",
            icon: <HiOutlineDatabase size={24} />,
            features: ["NoSQL Schema Design", "CRUD Operations", "Data Validation"],
            tech: ["MongoDB", "Mongoose"]
        },
        {
            id: 4,
            title: "Authentication Systems",
            main: "Securing applications with modern auth like JWT and Secure Cookies.",
            icon: <HiOutlineLockClosed size={24} />,
            features: ["User Auth Systems", "JWT Tokens", "Password Hashing"],
            tech: ["JWT", "Bcrypt"]
        }
    ];

    return (
        <section id='Services' className='min-h-screen flex flex-col items-center justify-center py-16 font-sans px-5'>
            <h1 className='text-4xl font-bold mb-2 text-gray-800'>My Services</h1>
            <p className='text-lg text-gray-500 mb-12 text-center font-normal'>Specialized in MERN stack development</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-6  place-items-center w-full max-w-4xl'>
                {services.map((service) => (
                    <div key={service.id} className='w-full md:w-[95%]'>
                        <div className='group flex flex-col h-[380px] p-7 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-300 overflow-hidden'>
                            
                            <div className='flex items-center gap-4 mb-5'>
                                <div className='w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-gray-800 group-hover:text-white transition-all duration-300'>
                                    {service.icon}
                                </div>
                                <h3 className='text-2xl font-bold text-gray-800'>
                                    {service.title}
                                </h3>
                            </div>

                            <p className='text-base text-gray-600 leading-relaxed mb-5 font-normal'>
                                {service.main}
                            </p>

                            <div className='flex-1'>
                                <p className='text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3'>Key Features</p>
                                <ul className='space-y-2'>
                                    {service.features.map((feature, i) => (
                                        <li key={i} className='flex items-center gap-2 text-gray-700 text-[15px] font-normal'>
                                            <span className='text-gray-300'>▹</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className='w-full mt-4'>
                                <hr className='border-dashed border-gray-200' />
                            </div>

                            <div className='pt-4 flex flex-wrap gap-2'>
                                {service.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1 bg-gray-50 text-[10px] font-bold uppercase rounded-lg text-gray-500 border border-gray-100">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Servese;
