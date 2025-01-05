import NavBar from "../components/navbar";
import Image from "next/image";

export default function Experience() {
    return (
        <div className="flex flex-col items-center justify-center mx-auto gap-15 h-screen">
            <NavBar />
            <div className='my-40 flex flex-col items-center justify-center gap-20 w-screen'>
            <div className="text-zinc-200 text-6xl animate-title text-center">Experience</div>
            <div className="flex flex-row items-center justify-center gap-10 w-full">
                <div className="m-10 w-6/12 h-5/6 border-2 rounded-xl border-zinc-500 p-10 z-10 text-zinc-200 flex flex-col gap-10 items-center justify-evenly">
                    <span className="text-4xl">Work</span>
                    <div className="flex flex-col items-center gap-10 w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                            <Image src="/hutchinson.png" alt="Hutchinson" width={75} height={75} />
                            <div className="flex flex-col">
                                <span className="text-xl">Software Engineer Intern</span>
                                <span className="text-xl italic">Hutchinson, Singapore</span>
                            </div>
                            <span className="text-lg">May 2024 - Nov 2024</span>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                            <Image src="/deif.png" alt="DEIF" width={75} height={75} />
                            <div className="flex flex-col">
                                <span className="text-xl">Software Developer</span>
                                <span className="text-xl italic">DEIF, Singapore</span>
                            </div>
                            <span className="text-lg">Oct 2023 - Jan 2024</span>
                        </div>
                    </div>
                </div>
                <div className="m-10 w-6/12 h-5/6 border-2 rounded-xl border-zinc-500 p-10 z-10 text-zinc-200 flex flex-col gap-10 items-center justify-center">
                    <span className="text-4xl">Projects</span>
                    <div className="flex flex-col items-center gap-7 w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-col">
                                <span className="text-lg">SELENE</span>
                                <span className="text-lg italic">NUS, Singapore</span>
                            </div>
                            <span className="text-md">Oct 2024 - Present</span>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-col">
                                <span className="text-lg">Project Oasis</span>
                                <span className="text-lg italic">NUS Google Developers&apos; Group, Singapore</span>
                            </div>
                            <span className="text-md">Sep 2024 - Present</span>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-col">
                                <span className="text-lg">CATcher & WATcher</span>
                                <span className="text-lg italic">NUS, Singapore</span>
                            </div>
                            <span className="text-md">Jan 2024 - Present</span>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-col">
                                <span className="text-lg">ScoreScope</span>
                                <span className="text-lg italic">NUS Orbital, Singapore</span>
                            </div>
                            <span className="text-md">May 2023 - Aug 2023</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}