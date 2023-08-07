import React from 'react'
import { useSpring, animated } from 'react-spring';


function Count({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 400,
        config: { mass: 4, tension: 10, friction: 10 },
    })
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>; 
}
function Counting() {
    return (
        <div className='lg:grid lg:grid-cols-2 gap-5'>
            <div className="one">
                <p className='text-blue-600 my-5 bg-white/10 py-10 rounded-2xl text-center text-4xl tracking-wide font-extrabold '>
                    <Count n={10} /><span className='text-white font-semibold text-xl'>Completed Projects</span> 
                </p>
                <p className='text-blue-600 my-5 bg-white/10 py-10 rounded-2xl text-center text-4xl tracking-wide font-extrabold '>
                    <Count n={12} /><span className='text-white font-semibold text-xl'>Ongoing Projects</span> 
                </p>
            </div>
            <div className="one mt-10">
            <p className='text-blue-600 my-5 bg-white/10 py-10 rounded-2xl text-center text-4xl tracking-wide font-extrabold '>
                    <Count n={15} /><span className='text-white font-semibold text-xl'> Partnership Projects</span>
                </p>
                <p className='text-blue-600 my-5 bg-white/10 py-10 rounded-2xl text-center text-4xl tracking-wide font-extrabold '>
                    <Count n={7} /><span className='text-white font-semibold text-xl'> Years on</span>
                </p>
            </div>
        </div>
    )
}

export default Counting