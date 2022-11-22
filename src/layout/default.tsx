import { Link } from "gatsby";
import React, { useEffect, useState } from "react";

import "../index.scss";

import * as styles from "./default.module.scss";

const Layout = (props: React.PropsWithChildren<{
    doTransparency?: boolean
}>) => {
    let [atTop, setAtTop] = useState(false);

    const updateTransparency = () => {
        if (typeof window === "undefined") return;

        // eslint-disable-next-line no-undef
        if (window.scrollY < 15) {
            if (!atTop) setAtTop(true);
        } else {
            if (atTop) setAtTop(false);
        }
    };

    useEffect(() => {
        if (typeof window === "undefined") return;

        // eslint-disable-next-line no-undef
        window.addEventListener("scroll", updateTransparency);
        // eslint-disable-next-line no-undef
        window.addEventListener("navigate", updateTransparency);

        updateTransparency();

        // eslint-disable-next-line no-undef
        let int = window.setInterval(updateTransparency, 10000);

        return () => {
            // eslint-disable-next-line no-undef
            window.removeEventListener("scroll", updateTransparency);
            // eslint-disable-next-line no-undef
            window.removeEventListener("navigate", updateTransparency);

            // eslint-disable-next-line no-undef
            window.clearInterval(int);
        };
    });

    return <div className={styles.layout}>
        <div className={styles.navigation + (props.doTransparency ? " " + styles.mayDoTransparency : "") + (props.doTransparency && atTop ? " " + styles.transparent : "")}>
            <nav>
                <Link to={"/"} className={styles.logo}>
                    <span className={styles.navLink}>Kanaljaeger</span>
                    <div className={styles.border}>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </Link>

                {/*<Link to="/test">Test</Link>*/}
            </nav>
        </div>
        <div role="main">
            {props.children}
        </div>
        <footer>Kanaljaeger.net | <a href="https://kevink.dev/legal/about">Imprint</a></footer>
    </div>
}

export default Layout