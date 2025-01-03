import Link from "next/link"

export const NavBar: React.FC = () => {
    return (
        <div className='fixed inset-x-0 top-0 z-20 backdrop-blur duration-200'>
            <div className="flex flex-row items-center justify-between mx-5 p-6">
                <Link href="/" className="flex text-zinc-200 text-3xl">Aditya Misra.</Link>
                <div className="flex justify-between gap-8">
                    <Link
                        href="/about"
                        className="duration-200 text-zinc-400 hover:text-zinc-100"
                    >
                        About
                    </Link>
                    <Link
                        href="/experience"
                        className="duration-200 text-zinc-400 hover:text-zinc-100"
                    >
                        Experience
                    </Link>
                    <Link
                        href="/contact"
                        className="duration-200 text-zinc-400 hover:text-zinc-100"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/resume"
                        className="duration-200 text-zinc-400 hover:text-zinc-100"
                    >
                        Resume
                    </Link>
                </div>
            </div>
        </div>
    )
}