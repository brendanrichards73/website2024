import { useRef, useState, MouseEvent } from "react";
import styles from "./Portfolio.module.css";
import { bgStylesBlackWhite } from "../../utils/contants";
import { FaPlayCircle, FaTimes } from "react-icons/fa";

export default function Portfolio() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoSource, setVideoSource] = useState("");

    const item1Ref = useRef<HTMLDivElement | null>(null);
    const item2Ref = useRef<HTMLDivElement | null>(null);

    const handleClick = (videoSource: string) => (e: MouseEvent) => {
        setIsModalOpen(true);
        setVideoSource(videoSource);
    };

    return (
        <>
            <div
                className={styles.portfolioContainer}
                style={bgStylesBlackWhite}
            >
                <h1 className={styles.portfolioTitle}>
                    Examples of personal projects
                </h1>
                <div className={styles.rowContainer}>
                    <div>
                        <div className={styles.projectContainer}>
                            <div className={styles.infoitemContainer}>
                                <div className={styles.infoContainer}>
                                    <h1 className={styles.description}>
                                        Economist Core APP <br /> <br /> This is
                                        not one of my personal projects but an
                                        example of the work that I was part of
                                        when employed by The Economist on thier
                                        content squad. The app is build using
                                        React-Native.
                                    </h1>
                                    <a
                                        href="https://www.economist.com/"
                                        target="_blank"
                                        className={styles.gitHubLink}
                                        rel="noreferrer"
                                    >
                                        Link to Economst.com
                                    </a>
                                </div>
                                <div className={styles.itemContainer}>
                                    <div
                                        ref={item1Ref}
                                        className={styles.item1}
                                        onClick={handleClick(
                                            "/videos/economist_clip.mov"
                                        )}
                                    >
                                        <img
                                            src="images/economist-app.jpg"
                                            alt="economist app"
                                        ></img>
                                        <FaPlayCircle
                                            className={styles.playIcon}
                                        />
                                        {isModalOpen &&
                                            videoSource ===
                                                "/videos/economist_clip.mov" && (
                                                <div className={styles.modal}>
                                                    <FaTimes
                                                        className={
                                                            styles.closeIcon
                                                        }
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setIsModalOpen(
                                                                false
                                                            );
                                                        }}
                                                    />
                                                    <video controls autoPlay>
                                                        <source
                                                            src={videoSource}
                                                            type="video/mp4"
                                                        />
                                                        Your browser does not
                                                        support the video tag.
                                                    </video>
                                                </div>
                                            )}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.infoitemContainer}>
                                <div className={styles.infoContainer}>
                                    <h1 className={styles.description}>
                                        TODO APP <br /> <br /> A simple todo
                                        list app that allows users to add, and
                                        delete tasks. The app also allows users
                                        to mark tasks as complete. It is built
                                        using React-Native expo cli and
                                        TypeScript
                                    </h1>
                                    <a
                                        href="https://github.com/brendanrichards73/brendan-todo-app"
                                        target="_blank"
                                        className={styles.gitHubLink}
                                        rel="noreferrer"
                                    >
                                        Link to GitHub Project
                                    </a>
                                </div>
                                <div className={styles.itemContainer}>
                                    <div
                                        ref={item1Ref}
                                        className={styles.item1}
                                        onClick={handleClick(
                                            "/videos/todo-list-video.mp4"
                                        )}
                                    >
                                        <img
                                            src="/images/todolistImage.jpg"
                                            alt="todo app"
                                        ></img>
                                        <FaPlayCircle
                                            className={styles.playIcon}
                                        />
                                        {isModalOpen &&
                                            videoSource ===
                                                "/videos/todo-list-video.mp4" && (
                                                <div className={styles.modal}>
                                                    <FaTimes
                                                        className={
                                                            styles.closeIcon
                                                        }
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setIsModalOpen(
                                                                false
                                                            );
                                                        }}
                                                    />
                                                    <video controls autoPlay>
                                                        <source
                                                            src={videoSource}
                                                            type="video/mp4"
                                                        />
                                                        Your browser does not
                                                        support the video tag.
                                                    </video>
                                                </div>
                                            )}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.infoitemContainer}>
                                <div className={styles.infoContainer}>
                                    <h1 className={styles.description}>
                                        Fitness App <br /> <br /> This is a
                                        project that I started in 2020, but it
                                        wasn't worked on for the past few years.
                                        I have recently picked this back up and
                                        is a current ongoing project for a
                                        fitness app. It is built using
                                        React-Native expo cli and TypeScript.
                                    </h1>
                                    <a
                                        href="https://github.com/brendanrichards73/personal-trainer-2-2024"
                                        target="_blank"
                                        className={styles.gitHubLink}
                                        rel="noreferrer"
                                    >
                                        Link to GitHub Project
                                    </a>
                                </div>
                                <div className={styles.itemContainer}>
                                    <div
                                        ref={item2Ref}
                                        className={styles.item2}
                                        onClick={handleClick(
                                            "/videos/lmfitness-video.mp4"
                                        )}
                                    >
                                        <img
                                            src="/images/lmfitnessImage.jpg"
                                            alt="fitness app"
                                        ></img>
                                        <FaPlayCircle
                                            className={styles.playIcon}
                                        />
                                        {isModalOpen &&
                                            videoSource ===
                                                "/videos/lmfitness-video.mp4" && (
                                                <div className={styles.modal}>
                                                    <FaTimes
                                                        className={
                                                            styles.closeIcon
                                                        }
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setIsModalOpen(
                                                                false
                                                            );
                                                        }}
                                                    />
                                                    <video controls autoPlay>
                                                        <source
                                                            src={videoSource}
                                                            type="video/mp4"
                                                        />
                                                        Your browser does not
                                                        support the video tag.
                                                    </video>
                                                </div>
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.infoitemContainer}>
                        <div className={styles.infoContainer}>
                            <h1 className={styles.description}>
                                Portfolio Website <br /> <br /> This is a
                                project that I started in 2020, but it wasn't
                                worked on for the pasty few years. Since then
                                the original libraries have become outdated so
                                this is a new project risen from the ashes! It
                                is a current ongoing project for a fitness app.
                                It is built using React-Native expo cli and
                                TypeScript.
                            </h1>
                            <a
                                href="https://github.com/brendanrichards73/website2024"
                                target="_blank"
                                className={styles.gitHubLink}
                                rel="noreferrer"
                            >
                                Link to GitHub Project
                            </a>
                        </div>
                        <div className={styles.itemContainer}>
                            <div className={styles.webSiteItemRef}>
                                <img
                                    style={{ width: "800px" }}
                                    src="/images/websiteFrontPage.jpg"
                                    alt="website front page"
                                ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
