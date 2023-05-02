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
                <header>
                    <div className="items-center lg:flex">
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src={require('/src/Bothniabladet.png')}
                            alt="Bothniabladet logga"
                            width={150}
                            height={100}
                            priority
                        />

                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src={require('/src/BothniabladetHeader.png')}
                            alt="Bothniabladet logga"
                            width={700}
                            height = {"auto"}
                            priority
                        />

                        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                            <Link href="login" >
                                Logga in
                            </Link>

                        </h1>

                    </div>
                </header>
            </div>

        </main>
    )
}