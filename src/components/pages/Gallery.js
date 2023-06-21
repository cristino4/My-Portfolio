import React from "react";


const Gallery = () => {

const data = [

    {
        title: 'Audio-Visual Medical Systems',
        description: `During my work at Broadata Communications, I had the awesome opportunity to work with and support cutting edge video electronics
        and state-of-the-art operating room systems.`,
        image: './assets/images/me-or-room.jpg',
        alt: 'me in room'
    },
    {
        title: 'Video Signal Analysis',
        description: `HDMI is a household term, but what about SDI and HDBaseT? There is much more than meets the 'eye' (pun intended)
        when it comes to video signal transmission. The best way to troubleshoot and test video electronics is with the proper equipment!`,
        image: './assets/images/sdi-video-analysis.jpg',
        alt: 'video analysis'
    },
    {
        title: 'Wall of OR Equipment',
        description: `Perfecting the best operating room (OR) electronic systems takes thousands of hours of testing and evaluation. Do this for 
        many years and you get this image, the Wall of OR Equipment: a visual history of the evolution of OR equipment.`,
        image: './assets/images/wall-of-electronics.jpg',
        alt: 'wall of electronics'
    },
    {
        title: 'Commercial Audio-Visual Integration Systems',
        description: `Video over IP video distribution has become very popular among integrators. Regardless of the technology, it is satisfying 
        to see my work pay off at a customer's site!`,
        image: './assets/images/av-bar-application2.jpg',
        alt: 'bar monitors'
    },
    {
        title: 'Video over IP',
        description: `Transporting video over a standard ethernet link, VoIP distribution systems have replaced many traditional matrix switches. 
        Even so, we still have a ton of cables to pull!`,
        image: './assets/images/ethernet-switch.jpg',
        alt: 'ethernet switch'
    },
    {
        title: 'Video Electronics Design',
        description: `Audio-Video equipment operates through a combination of many integrated circuits. While some designs are straight forward,
        some designs require customization and hundreds of hours of fine tuning the code!`,
        image: './assets/images/tps65261-board.jpg',
        alt: 'pcb board'
    },
    {
        title: 'Crash Test Data Aquisition',
        description: `During my brief time at IDIADA Karco, I learned to use data aquisition systems to gather crash test data and produce reports.
        There is a tremendous amount of effort done behind the scenes to make vehicles meet global safety standards!`,
        image: './assets/images/karco.jpg',
        alt: 'crash test'
    },
    {
        title: 'Inspirations',
        description: `The Saturn V rocket is the greatest technological acheivement from the days of Apollo. I draw inspiration from it to improve my skills.`,
        image: './assets/images/saturn5.jpg',
        alt: 'saturn V'
    },
    {
        title: "Cellphone Repairs",
        description: `When the iPhone 3 was released, I learned to repair it along with all types of other branded phones. Each year Apple and 
        Samsung kept making these phone more and more difficult to repair! Over the years I repaired well over 100 phones and tablets for my customers.`,
        image: './assets/images/fixphones.jpg',
        alt: 'fixing phones'
    },
    {
        title: "Senior Design Project",
        description: `One of the the first group technical projects which involved electronics was my senior design project. It was 
        an Android application and MCU-controlled device that communicatied over Bluetooth. The device scanned networks for 
        home automation devices and displayed the data on a tablet.`,
        image: './assets/images/seniorprojectposter.jpg',
        alt: 'project poster'
    }
];

    return (
        <div className="flex flex-col w-full">
            {data.map((item) => (
                <div key={item.title} className="flex flex-col items-center my-5">
                    <p className="text-white text-xl font-medium font-sans my-5">{item.title}</p>
                    <p className="text-center text-gray-500 text-lg font-medium font-sans my-5">{item.description}</p>
                    <img src={item.image} alt={item.alt}/>
                </div>
            ))}
        </div>
    );
};


export default Gallery;