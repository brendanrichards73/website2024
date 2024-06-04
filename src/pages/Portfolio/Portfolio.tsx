import { useRef, useState, MouseEvent, RefObject } from "react";
import styles from "./Portfolio.module.css";
import { bgStylesBlackWhite } from "../../utils/contants";
import { FaPlayCircle, FaTimes } from "react-icons/fa";

export default function Portfolio() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoSource, setVideoSource] = useState("");

    const item1Ref = useRef<HTMLDivElement | null>(null);
    const item2Ref = useRef<HTMLDivElement | null>(null);
    const item3Ref = useRef<HTMLDivElement | null>(null);

    const handleClick =
        (videoSource: string, itemRef: RefObject<HTMLDivElement>) =>
        (e: MouseEvent) => {
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
                <div className={styles.projectContainer}>
                    <div className={styles.infoitemContainer}>
                        <div className={styles.infoContainer}>
                            <h1 className={styles.description}>
                                Description of Project
                            </h1>
                            <h1 className={styles.gitHubLink}>
                                Link to GitHub Project
                            </h1>
                        </div>
                        <div className={styles.itemContainer}>
                            <div
                                ref={item1Ref}
                                className={styles.item1}
                                onClick={handleClick(
                                    "/videos/todo-list-video.mp4",
                                    item1Ref
                                )}
                            >
                                <img
                                    src="/images/todolistImage.jpg"
                                    alt="todo app"
                                ></img>
                                <FaPlayCircle className={styles.playIcon} />
                                {isModalOpen &&
                                    videoSource ===
                                        "/videos/todo-list-video.mp4" && (
                                        <div className={styles.modal}>
                                            <FaTimes
                                                className={styles.closeIcon}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setIsModalOpen(false);
                                                }}
                                            />
                                            <video controls autoPlay>
                                                <source
                                                    src={videoSource}
                                                    type="video/mp4"
                                                />
                                                Your browser does not support
                                                the video tag.
                                            </video>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>

                    <div className={styles.infoitemContainer}>
                        <div className={styles.infoContainer}>
                            <h1 className={styles.description}>
                                Description of Project
                            </h1>
                            <h1 className={styles.gitHubLink}>
                                Link to GitHub Project
                            </h1>
                        </div>
                        <div className={styles.itemContainer}>
                            <div
                                ref={item2Ref}
                                className={styles.item2}
                                onClick={handleClick(
                                    "/videos/lmfitness-video.mp4",
                                    item2Ref
                                )}
                            >
                                <img
                                    src="/images/lmfitnessImage.jpg"
                                    alt="fitness app"
                                ></img>
                                <FaPlayCircle className={styles.playIcon} />
                                {isModalOpen &&
                                    videoSource ===
                                        "/videos/lmfitness-video.mp4" && (
                                        <div className={styles.modal}>
                                            <FaTimes
                                                className={styles.closeIcon}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setIsModalOpen(false);
                                                }}
                                            />
                                            <video controls autoPlay>
                                                <source
                                                    src={videoSource}
                                                    type="video/mp4"
                                                />
                                                Your browser does not support
                                                the video tag.
                                            </video>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>

                    <div className={styles.infoitemContainer}>
                        <div className={styles.infoContainer}>
                            <h1 className={styles.description}>
                                Description of Project
                            </h1>
                            <h1 className={styles.gitHubLink}>
                                Link to GitHub Project
                            </h1>
                        </div>
                        <div className={styles.itemContainer}>
                            <div
                                ref={item3Ref}
                                className={styles.item3}
                                onClick={handleClick(
                                    "/videos/lmfitness-video.mp4",
                                    item3Ref
                                )}
                            >
                                <img
                                    src="/images/office-garden-2.jpg"
                                    alt="garden app"
                                ></img>
                                <FaPlayCircle className={styles.playIcon} />
                                {isModalOpen &&
                                    videoSource ===
                                        "/videos/lmfitness-video.mp4" && (
                                        <div className={styles.modal}>
                                            <FaTimes
                                                className={styles.closeIcon}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setIsModalOpen(false);
                                                }}
                                            />
                                            <video controls autoPlay>
                                                <source
                                                    src={videoSource}
                                                    type="video/mp4"
                                                />
                                                Your browser does not support
                                                the video tag.
                                            </video>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
