import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import vercel from "../public/meme.png";
import youyou from "../public/youyou.png";

const Home: NextPage = () => {
    const cards = [
        {
            name: "#Smile",
            desc: "I make sure I smile when I do my work to show that I enjoy it. A smile give a positivity in the world.",
            id: 1,
        },
        {
            name: "#Adapt",
            desc: "I am quick to adatpt to new changes and enviroment. I dont get stack in the past. I like changes is a sign that things can get better or worse",
            id: 2,
        },

        {
            name: "#Results",
            desc: "I am most driven by results, I mesure each milestone I reach to make sure I am moving towards my long tearm goal",
            id: 3,
        },
    ];

    const why = [
        "I am a great learner. I like to learn new ways of doing the same things. This year I have learned to use Linux, Command-Line. I also learn how to deploy your website on Netlify.",
        "Besides skills, I am a kind person. I value human interaction and I have a good sense of humor, after all, we are all human first before we are called with our job title.",
        "I love SovTech, I have been applying for a position at sovTech because its values align with mine. I am a good fit for my career in technology",
        "I like being challenged and challenging myself to do great things that seem I couldn't do before.  I can not wait to use my skills at SovTech.",
        "I have a passion for Software Development. My Github profile shows. I love to write, solve the problem using the software.",
    ];

    return (
        <>
            <header>
                <div className="wrapper">
                    <div className="logo">
                        <span className="logo"></span>
                        Hendry
                    </div>
                    <div className="thisone">
                        <div className="text">
                            <h1>
                                <span className="greeting">Hi SovTech!</span>{" "}
                                <br />I am <span> Hendry</span> <br /> a
                                <span> Computer System</span> <br /> Graduate
                            </h1>

                            <p>
                                Pationate about Technology, Mathematics, and
                                Philosophy
                            </p>

                            <button> Email Me </button>
                            <Link href="www.hendry.xyz">
                                <a>Lean More</a>
                            </Link>
                        </div>
                        <Image src={vercel} alt="okay.." />
                    </div>
                </div>
                <div className="white-bg"></div>
            </header>

            <main>
                <section className="relate">
                    <div className="wrapper">
                        <h1>
                            <span> SovTech </span> Spex <br /> That I relate the
                            most
                        </h1>

                        <div className="cards">
                            {cards.map((card: any) => (
                                <div className="card" key={card.id}>
                                    <h3>{card.name}</h3> <p>{card.desc}</p>{" "}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="icare">
                    <div className="wrapper">
                        <div className="text">
                            <h3>
I am a great team player I love to share my ideas with others.
                            </h3>
                        </div>
                        <div className="img">
                            <Image src={youyou} alt="" />
                        </div>
                    </div>
                </section>
                <section className="why">
                    <div className="wrapper">
                        <h1>
                            Why I think I am a great fit for <br /> for this{" "}
                            <span>Graduate Programe</span>
                        </h1>

                        <ol>
                            {why.map((item: any, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ol>
                    </div>
                </section>
            </main>
            <footer>
                <Link href="www.hendry.xyz">
                    <a>Simanga Hendry Khoza</a>
                </Link>
            </footer>
        </>
    );
};

export default Home;
