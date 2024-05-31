import styles from "./Navbar.module.css";

type CustomLinkprops = {
    href: string;
    children: React.ReactNode;
    [key: string]: any;
};

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <h1 className={styles.title}>created by Brendan Richards</h1>
            <ul>
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
