import { useState } from "react";
import styles from "./Navbar.module.css";

type CustomLinkprops = {
    href: string;
    children: React.ReactNode;
    [key: string]: unknown;
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            <h1 className={styles.titleName}>created by Brendan Richards</h1>
            <div
                className={styles.hamburger}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={isOpen ? styles.open : ""}>
                <CustomLink href="/">Home</CustomLink>
                <CustomLink href="/about">About</CustomLink>
                <CustomLink href="/services">Portfolio</CustomLink>
                <CustomLink href="/contact">Contact</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ href, children, ...props }: CustomLinkprops) {
    const path = window.location.pathname;

    return (
        <li
            className={
                path === href || (path === "/" && href === "/")
                    ? styles.active
                    : ""
            }
        >
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    );
}
