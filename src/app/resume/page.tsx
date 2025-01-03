import { NavBar } from "../components/navbar"

export default function Resume() {
    return (
        <div className="flex flex-col items-center justify-center mx-auto gap-20 h-screen">
            <NavBar />
            <div className="my-10 flex flex-col items-center justify center z-10 w-full">
                <div className="text-zinc-200 text-5xl animate-title py-10">Resume</div>
                <div className="relative w-full h-[70vh]">
                    <iframe
                        src="/resume.pdf"
                        className="w-[50%] h-full mx-auto border rounded-xl"
                    ></iframe>
                </div>

            </div>
        </div>
    );
}