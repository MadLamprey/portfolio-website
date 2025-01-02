export default function Resume() {
    return (
        <div className="container flex flex-col items-center justify-center mx-auto gap-15">
            <div className="text-zinc-200 text-5xl animate-title">Resume</div>
            <div className="h-200 w-96">
                <iframe src="/resume.pdf" className="h-full w-full" title="resume"></iframe>
            </div>
        </div>
    );
}