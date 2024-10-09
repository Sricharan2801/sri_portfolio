import React from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {

    const [hasCopied, setHasCopied] = React.useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText('sricharandasadepu@gmail.com')
        setHasCopied(true)
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }



    return (
        <section className='c-space my-20' id='about'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5'>
                <div className='col-span-1 xl:row-span-3 '>
                    <div className='grid-container'>

                        <img src="/assets/grid1.png" alt="grid-1"
                            className='w-full sm:h-[276px] h-fit object-contain' />

                        <div className=''>
                            <p className='grid-headtext'>Hi, I'm Sri Charan</p>
                            <p className='grid-subtext'>With 2 years of experience, I have honed my skills in
                                frontend and backend development, with a focus on animated 3D websites. </p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/ab.png" alt="grid-2" className='w-fill sm:w-[276px] h-fit object-cover'
                            style={{ height: '276px' }} />

                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className='grid-subtext'> I specialize in JavaScript/TypeScript with a focus on React</p>
                        </div>
                    </div>
                </div>


                <div className='col-span-1 xl:row-span-4'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                            <Globe height={326}
                                width={326}
                                backgroundColor='rgba(0,0,0,0)'
                                backgroundImage='linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)'
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl={"//unpkg.com/three-globe/example/img/earth-night.jpg"}
                                bumpImageUrl={"//unpkg.com/three-globe/example/img/earth-topology.png"}
                            />
                        </div>

                        <div>
                            <p className='grid-headtext'> I work remotely across most timezones.</p>
                            <p className='grid-subtext'>I'm based in India, with remote work available</p>
                            <a href="#contact">
                                <Button name='Contact Me' isBeam containerClass='w-full mt-10' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='xl:col-span-2 xl:row-span-3 '>
                    <div className='grid-container'>
                        <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />

                        <div>
                            <p className='grid-headtext'>My Passion for coading</p>
                            <p className='grid-subtext'>I love solving problems and building things through code. Coading
                                isn't just my profession - it is my passion
                            </p>
                        </div>
                    </div>
                </div>


                <div className='xl:col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />

                        <div className='space-y-2'>
                            <p className='grid-subtext text-center'> Contact me</p>
                            <div className='copy-container' onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className='lg:text-xl md:text-xl font-medium text-gray_gradient' text-white>
                                    sricharandasadepu@gmailcom
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default About

