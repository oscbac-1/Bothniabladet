import Image from "next/image";
import {Inter} from "next/font/google";
import Link from "next/link";
import { Formik, Field, Form } from 'formik';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    return (
        <main
            // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >

            <div>
                <header className="flex justify-center">

                    <div className="flex flex-wrap items-center justify-around">

                        <Image
                            class="basis-1/8 shrink"
                            src={require('/src/Bothniabladet.png')}
                            alt="Bothniabladet logga"
                            width={150}
                            height={100}
                            priority
                        />

                        <Image
                            class="basis-1/2 shrink"
                            src={require('/src/BothniabladetHeader.png')}
                            alt="Bothniabladet logga"
                            width={700}
                            height={"auto"}
                            priority
                        />

                        <h1
                            // className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
                            className="loginButton basis-1/8"
                        >

                            <Link href="login">
                                Logga in
                            </Link>

                        </h1>

                    </div>
                </header>
            </div>

            <div className="flex flex-col items-center pt-7">
                <h1 className="text-2xl">
                    Tipsa Bothniabladet!
                </h1>

                <p>
                    Har du nyhetstips eller bilder? Skicka in din bild till oss!
                </p>
            </div>

            <div className="py-72">

            </div>

        </main>
    )
}