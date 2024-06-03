import { useRef, useState } from "react";
import styles from "./Portfolio.module.css";
import { bgStylesBlackWhite } from "../../utils/contants";
import { FaTimes } from "react-icons/fa";

export default function Portfolio() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoSource, setVideoSource] = useState("");
    const [clickX, setClickX] = useState(0);
    const [clickY, setClickY] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);
    const [itemHeight, setItemHeight] = useState(0);

    const item1Ref = useRef<HTMLDivElement | null>(null);
    const item2Ref = useRef<HTMLDivElement | null>(null);
    const item3Ref = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <div
                className={styles.portfolioContainer}
                style={bgStylesBlackWhite}
            >
                <h1 className={styles.portfolioTitle}>
                    Examples of personal projects
                </h1>
                <div className={styles.itemContainer}>
                    <div
                        ref={item1Ref}
                        className={styles.item1}
                        onClick={(e) => {
                            setIsModalOpen(true);
                            setVideoSource("/videos/todo-list-video.mp4");
                            if (item1Ref.current) {
                                const rect =
                                    item1Ref.current.getBoundingClientRect();
                                setClickX(rect.left);
                                setClickY(rect.top);
                                setItemWidth(rect.width);
                                setItemHeight(rect.height);
                            }
                        }}
                    >
                        <img
                            src="/images/todolistImage.jpg"
                            alt="todo app"
                        ></img>
                    </div>

                    <div
                        ref={item2Ref}
                        className={styles.item2}
                        onClick={(e) => {
                            setIsModalOpen(true);
                            setVideoSource("/videos/lmfitness-video.mp4");
                            if (item2Ref.current) {
                                const rect =
                                    item2Ref.current.getBoundingClientRect();
                                setClickX(rect.left);
                                setClickY(rect.top);
                                setItemWidth(rect.width);
                                setItemHeight(rect.height);
                            }
                        }}
                    >
                        <img
                            src="/images/lmfitnessImage.jpg"
                            alt="fitness app"
                        ></img>
                    </div>

                    <div
                        ref={item3Ref}
                        className={styles.item3}
                        onClick={(e) => {
                            setIsModalOpen(true);
                            setVideoSource("/videos/lmfitness-video.mp4");
                            if (item3Ref.current) {
                                const rect =
                                    item3Ref.current.getBoundingClientRect();
                                setClickX(rect.left);
                                setClickY(rect.top);
                                setItemWidth(rect.width);
                                setItemHeight(rect.height);
                            }
                        }}
                    >
                        <img
                            src="/images/office-garden-2.jpg"
                            alt="garden app"
                        ></img>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div
                    className={styles.modal}
                    style={{
                        left: clickX,
                        top: clickY,
                        width: itemWidth,
                        height: itemHeight,
                    }}
                >
                    <FaTimes
                        className={styles.closeIcon}
                        onClick={() => setIsModalOpen(false)}
                    />
                    <video width="320" height="400" controls autoPlay>
                        <source src={videoSource} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
        </>
    );
}
