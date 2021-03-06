import { useState, useRef, useEffect } from "react";
import gsap from 'https://cdn.skypack.dev/gsap';

const Hamburger = () => {
    const menuToggle_1Ref = useRef(null)
    const menuToggle_2Ref = useRef(null)
    const menuToggle_3Ref = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)

    useEffect(()=> {
        if (isOpen) {
        gsap.to(menuToggle_1Ref.current, 0.6,{
            attr: { d: "M9,2 L3,8" },
            x:1,
            ease: 'power2.easeInOut'
        }, 'start')
        gsap.to(menuToggle_2Ref.current, 0.6,{
            autoAlpha:0
        }, 'start')
        
        gsap.to(menuToggle_3Ref.current, 0.6,{
            attr:{d: "M9,8 L3,2"},
            x:1,
            ease: 'power2.easeInOut'
        }, 'start')

        let loader = gsap.timeline({})

    loader.to('.bluee', {
        duration: .8,
        attr: { d: 'M0 502S175 272 500 272s500 230 500 230V0H0Z'},
        ease: 'power2.in',
    })
    .to('.bluee', {
        duration: .8,
        attr: { d: 'M0 2S175 1 500 1s500 1 500 1V0H0Z'},
        ease: 'power2.out',
    })
    .to(menuRef.current,{
        duration: 1,
        y: 20,
        autoAlpha:1,
        ease: 'power2.out',
        stagger: 1
    })
    
    } else {
        gsap.to(menuToggle_1Ref.current, 0.5,{
            attr: { d: "M10, 2 L2, 2" },
            x:1,
            ease: 'power2.easeInOut'
        }, 'start')
        gsap.to(menuToggle_2Ref.current, 0.5,{
            autoAlpha:1,
            x:1
        }, 'start')
        
        gsap.to(menuToggle_3Ref.current, 0.5,{
            attr:{d: "M10,8 L2,8"},
            x:1,
            ease: 'power2.easeInOut',
        }, 'start')
         
    }
    },[isOpen])


    return (
        <div className="fixed top-7 left-5 pointer z-50">
        <div className="fixed z-50 bg-black rounded-full p-2">
            <button className="bg-transparent border-none cursor-pointer outline-0 no-underline"
                onClick={() => setIsOpen(!isOpen)}>
                <svg viewBox="0 -1 13 10" className="h-7 w-9">
                    <path className="stroke-white stroke-[0.04rem]" d="M10, 2 L3, 2" ref={menuToggle_1Ref}></path>
                    <path className="stroke-white stroke-[0.04rem]" d="M2, 5 L10, 5" ref={menuToggle_2Ref}></path>
                    <path className="stroke-white stroke-[0.04rem]" d="M10,8 L2,8" ref={menuToggle_3Ref}></path>
                </svg>
            </button>
        </div>
        {
            isOpen
            ? <section className=" main-section fixed left-0 top-0 w-full h-screen overflow-hidden backdrop-blur-2xl ">
                <div className="flex items-center justify-center h-full px-32 py-42 ">
                <div className="h-full w-full absolute left-0 top-0 bg-gradient-to-b from-orange-50	... z-10"></div>
                    <svg className="h-full w-full absolute left-0 top-0 " viewBox="0 10 1000 1000" preserveAspectRatio="none">
                    <path className="h-full w-full bluee fill-orange-50" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
                    </svg>
                    <nav className="relative z-50 text-center">
                        <ul className="opacity-0" ref={menuRef}>
                            <li><span className="text-4xl">ABOUT US</span></li>
                            <li><span className="text-4xl">OUR CATS</span></li>
                            <li><span className="text-4xl">OUR KITTENS</span></li>
                            <li><span className="text-4xl">BLOG</span></li>
                            <li><span className="text-4xl">CONTACT US</span></li>
                        </ul>
                    </nav>
                </div>
            </section>
            : null
        }

        </div>
    )
}

export default Hamburger
