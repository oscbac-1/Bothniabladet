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

            <div class="parent">
                <div class="child">
                    <Link href="login">
                        Logga in
                    </Link>
                </div>

                <div class="child">
                    <Link href="register">
                        Registrera
                    </Link>
                </div>

            </div>

            <div className="fixed right-2" >
                <Image class={"logga"}
                       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                       src={require('/src/Bothniabladet.png')}
                       alt="Bothniabladet logga"
                       width={600}
                       height={600}
                       priority
                />
            </div>

            <div class="inputEmailPassword">
                <h1>
                    Email:
                </h1>
                <h1>
                    Lösenord:
                </h1>

            </div>

            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

                <h1 class={"registerButton"}>
                    <Link href="firstPage" >
                        Skapa konto
                    </Link>

                </h1>
            </div>
        </main>
    )
}
