import NavBar from "../components/navbar";
import Image from "next/image";

export default function Experience() {
    return (
        <div className="flex flex-col items-center justify-center mx-auto h-screen overflow-hidden">
            <NavBar />
            <div className='my-40 flex flex-col items-center justify-center gap-8 sm:gap-12 md:gap-20 w-screen'>
            <div className="text-zinc-200 text-xl sm:text-3xl md:text-6xl animate-title text-center">Experience</div>
            <div className="flex flex-wrap md:flex-nowrap gap-4 sm:gap-6 md:gap-10 max-w-full">
                <div className="flex flex-col w-full h-7/12 md:w-1/2 border-2 rounded-xl border-zinc-500 p-5 sm:p-7 md:p-10 z-10 text-zinc-200 gap-4 sm:gap-6 md:gap-1">
                    <span className="text-lg sm:text-2xl md:text-4xl">Work</span>
                    <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full">
                        <div className="flex items-center justify-between gap-5">
                            <Image src="/hutchinson.png" alt="Hutchinson" width={75} height={75} />
                            <div className="flex flex-col w-full">
                                <span className="text-xs sm:text-md md:text-xl">Software Engineer Intern</span>
                                <span className="text-xs sm:text-md md:text-xl italic">Hutchinson, Singapore</span>
                            </div>
                            <span className="text-xs sm:text-md md:text-lg">May 2024 - Nov 2024</span>
                        </div>
                        <div className="flex items-center justify-between gap-5">
                            <Image src="/deif.png" alt="DEIF" width={75} height={75} />
                            <div className="flex flex-col w-full">
                                <span className="text-xs sm:text-md md:text-xl">Software Developer</span>
                                <span className="text-xs sm:text-md md:text-xl italic">DEIF, Singapore</span>
                            </div>
                            <span className="text-xs sm:text-md md:text-lg">Oct 2023 - Jan 2024</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full h-7/12 md:w-1/2 border-2 rounded-xl border-zinc-500 p-5 sm:p-7 md:p-10 z-10 text-zinc-200 gap-4 sm:gap-6 md:gap-10">
                    <span className="text-lg sm:text-2xl md:text-4xl">Projects</span>
                    <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-7 w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-col">
                                <span className="text-xs sm:text-md md:text-lg">SELENE</span>
                                <span className="text-xs sm:text-md md:text-lg italic">NUS, Singapore</span>
                            </div>
                            <span className="text-xs sm:text-base md:text-md">Oct 2024 - Present</span>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-col">
                                <span className="text-xs sm:text-md md:text-lg">Project Oasis</span>
                                <span className="text-xs sm:text-md md:text-lg italic">NUS Google Developers&apos; Group, Singapore</span>
                            </div>
                            <span className="text-xs sm:text-base md:text-md">Sep 2024 - Present</span>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-col">
                                <span className="text-xs sm:text-md md:text-lg">CATcher & WATcher</span>
                                <span className="text-xs sm:text-md md:text-lg italic">NUS, Singapore</span>
                            </div>
                            <span className="text-xs sm:text-base md:text-md">Jan 2024 - Present</span>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-col">
                                <span className="text-xs sm:text-md md:text-lg">ScoreScope</span>
                                <span className="text-xs sm:text-md md:text-lg italic">NUS Orbital, Singapore</span>
                            </div>
                            <span className="text-xs sm:text-base md:text-md">May 2023 - Aug 2023</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}