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
                        most{" "}
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
                <h3> I am a greate team player, I love to share my idears with others </h3>
                </div>
                <div className="img">
                <Image src={youyou}alt="" />
                </div>

                
                </div>
                </section>
            </main>
            <footer>this is a footer</footer>
        </>
    );
};

export default Home;
