"use client";

import NavBar from "../components/navbar"
import { University, Library, Pencil, LinkIcon, Computer } from "lucide-react";
import { useState } from "react";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";
import Link from "next/link";
import Image from "next/image";

export default function Education() {
    const [isEduOpen, setIsEduOpen] = useState(false);
    const [isSkillOpen, setIsSkillOpen] = useState(false);
    const [isBlogOpen, setIsBlogOpen] = useState(false);
    const [isReadOpen, setIsReadOpen] = useState(false);

    const readingList = [
        {
            title: "Outliers",
            author: "Malcolm Gladwell",
            cover: "/outliers.jpg"
        },
        {
            title: "David and Goliath",
            author: "Malcolm Gladwell",
            cover: "/david-goliath.jpg"
        },
        {
            title: "Algorithms to Live By",
            author: "Tom Griffiths and Brian Christian",
            cover: "/algos.jpg"
        }
    ]

    return (
        <div className="flex flex-col items-center justify-center mx-auto gap-15 h-screen overflow-hidden">
            <NavBar />
            <div className={`my-40 flex flex-col items-center justify-center gap-20 ${isEduOpen || isSkillOpen || isBlogOpen || isReadOpen ? "blur": ""}`}>
                <div className="text-zinc-200 text-4xl sm:text-5xl md:text-6xl animate-title text-center">Hi!</div>
                <div className="border-4 rounded-xl border-zinc-500 p-10 max-w-6xl z-10 text-zinc-200 bg-zinc-800">
                    <p className="text-center text-sm sm:text-md md:text-lg">I am a <span className="text-2xl">Computer Science</span> student from India, currently studying in Singapore. My coursework and internships have revealed the transformative power of <span className="text-2xl">software engineering</span>, inspiring me to build solutions for <span className="text-2xl">social good</span>. I am also deeply intrigued by <span className="text-2xl">Artificial Intelligence</span> and <span className="text-2xl">Machine Learning</span>, and how they will shape our future.</p>
                </div>
                <div className="flex flex-row gap-20 my-0 z-10">
                <Popover placement="top" isOpen={isEduOpen} onOpenChange={(x) => setIsEduOpen(x)}>
                    <PopoverTrigger>
                        <div className="border rounded-xl border-zinc-600 bg-zinc-800 hover:bg-zinc-600 flex flex-col items-center justify-center w-56 h-24 hover:cursor-pointer" onClick={() => {setIsEduOpen(true)}}>
                            <span className="text-zinc-200 border-zinc-500">{<University size={30} />}</span>
                            <div className="text-zinc-200 text-2xl">Education</div>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="border-4 rounded-xl border-zinc-600 p-10 max-w-xl text-zinc-200 text-center">
                            <span className="text-2xl">National University of Singapore</span>
                            <p className="text-lg">Bachelor of Computing (Hons.)</p>
                            <p className="text-lg">Computer Science with Minor in Innovation and Design</p>
                            <p className="text-lg">2022 - 2026 (Expected)</p>
                            <br />
                            <p className="text-md">Specializing in Software Engineering, Database Systems and Artifical Intelligence & Machine Learning </p>
                        </div>
                    </PopoverContent>
                </Popover>
                <Popover placement="top" isOpen={isSkillOpen} onOpenChange={(x) => setIsSkillOpen(x)}>
                    <PopoverTrigger>
                        <div className="border rounded-xl border-zinc-600 bg-zinc-800 hover:bg-zinc-600 flex flex-col items-center justify-center w-56 h-24 hover:cursor-pointer" onClick={() => {setIsSkillOpen(true)}}>
                            <span className="text-zinc-200 border-zinc-500">{<Computer size={30} />}</span>
                            <div className="text-zinc-200 text-2xl">Skills</div>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="border-4 rounded-xl border-zinc-600 p-10 max-w-xl text-zinc-200 text-center flex flex-col gap-5">
                            <span className="text-xl">Languages</span>
                            <div className="flex flex-row gap-5 items-center justify-center">
                                <Image src="/skills/python.png" alt="Python" width={40} height={40} />
                                <Image src="/skills/java.png" alt="Java" width={40} height={40} />
                                <Image src="/skills/c.png" alt="C" width={40} height={40} />
                                <Image src="/skills/js.png" alt="JavaScript" width={40} height={40} />
                                <Image src="/skills/ts.png" alt="TypeScript" width={40} height={40} />
                                <Image src="/skills/sql.png" alt="SQL" width={40} height={40} />
                            </div>
                            <span className="text-xl">Frameworks</span>
                            <div className="flex flex-row gap-5 items-center justify-center">
                                <Image src="/skills/pytorch.png" alt="PyTorch" width={40} height={40} />
                                <Image src="/skills/angular.png" alt="Angular" width={40} height={40} />
                                <Image src="/skills/react.png" alt="React" width={40} height={40} />
                                <Image src="/skills/fastapi.png" alt="FastAPI" width={40} height={40} />
                            </div>
                            <span className="text-xl">Tools</span>
                            <div className="flex flex-row gap-5 items-center justify-center">
                                <Image src="/skills/docker.png" alt="Docker" width={40} height={40} />
                                <Image src="/skills/git.png" alt="Git" width={40} height={40} />
                                <Image src="/skills/postman.png" alt="Postman" width={40} height={40} />
                                <Image src="/skills/vim.png" alt="Vim" width={40} height={40} />
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
                <Popover placement="top" isOpen={isBlogOpen} onOpenChange={(x) => setIsBlogOpen(x)}>
                    <PopoverTrigger>
                        <div className="border rounded-xl border-zinc-600 bg-zinc-800 hover:bg-zinc-600 flex flex-col items-center justify-center w-56 h-24 hover:cursor-pointer" onClick={() => {setIsBlogOpen(true)}}>
                            <span className="text-zinc-200 border-zinc-500">{<Pencil size={30} />}</span>
                            <div className="text-zinc-200 text-2xl">Blog</div>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="border-4 rounded-xl border-zinc-600 p-10 max-w-xl text-zinc-200 text-center">
                            <p className="text-lg">Check out my blog where I write about how different, random topics in my coursework, find application in daily life!</p>
                            <p className="text-xs">&lt;Inspired by the writings of Tom Griffiths and Brian Christian&gt;</p>
                            <br />
                            <Link href="https://medium.com/@adityamisra_68704" className="flex flex-row items-center justify-center gap-2">
                                <LinkIcon size={15} />
                                <p className="text-lg underline">Aditya&apos;s Blog on Medium</p>
                            </Link>
                        </div>
                    </PopoverContent>
                </Popover>
                <Popover placement="top" isOpen={isReadOpen} onOpenChange={(x) => setIsReadOpen(x)}>
                    <PopoverTrigger>
                        <div className="border rounded-xl border-zinc-600 bg-zinc-800 hover:bg-zinc-600 flex flex-col items-center justify-center w-56 h-24 hover:cursor-pointer" onClick={() => {setIsReadOpen(true)}}>
                            <span className="text-zinc-200 border-zinc-500">{<Library size={30} />}</span>
                            <div className="text-zinc-200 text-2xl">Reading List</div>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="border-4 rounded-xl border-zinc-600 p-10 max-w-xl text-zinc-200 text-center">
                        <span className="text-2xl">My Top 3 Books</span>
                        <div className="flex flex-col gap-5 items-start p-5">
                            {readingList.map((book, index) => {
                                return (
                                    <div key={book.title} className="text-left">
                                        <div className="flex flex-row gap-5 items-center justify-center">
                                            <p className="text-lg">{index + 1}.</p>
                                            <div>
                                                <p className="text-lg">{book.title}</p>
                                                <p className="text-md">{book.author}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <p className="text-sm">Next Read: Alignment Problem (Brian Christian)</p>
                        </div>
                    </PopoverContent>
                </Popover>
                </div>
            </div>
        </div>
    );
}