import Link from "next/link"
import { NavBar } from "../components/navbar"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Contact() {
    const socials = [
        {
            icon: <Github size={50} />,
            href: "https://github.com/madlamprey",
            name: "GitHub",
            label: "madlamprey"
        },
        {
            icon: <Linkedin size={50} />,
            href: "https://www.linkedin.com/in/adityamisra04/",
            name: "LinkedIn",
            label: "adityamisra04"
        },
        {
            icon: <Mail size={50} />,
            href: "mailto:aditya.misra@u.nus.edu",
            name: "Email",
            label: "Aditya Misra"
        },
        {
            icon: <Phone size={50} />,
            href: "tel:+6583815159",
            name: "Phone",
            label: "+65 8381 5159"
        }
    ]

    return (
        <div className="flex flex-col items-center justify-center mx-auto gap-20 overflow-hidden h-screen">
            <NavBar />
            <div className="text-zinc-200 text-5xl animate-title">Contact Me</div>
            <div className="grid grid-cols-2 gap-16 z-10">
            {socials.map((social) => (
                <Link href={social.href} key={social.name}>
                    <div className="flex flex-row justify-center items-center gap-8 border rounded-xl hover:bg-zinc-800 border-zinc-600 px-5 py-7" key={social.name}>
                            <span className="text-zinc-200 border-zinc-500">{social.icon}</span>
                            <div className="text-zinc-400 text-lg">{social.label}</div>
                    </div>
                </Link>
            ))}
            </div>
        </div>
    )
}