import React from "react";
import styles from "./About.module.css"
import { getImageUrl } from "../../utils";

export const About = () =>{
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                {/* <img 
                    src={getImageUrl("about/aboutImage.png")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                /> */}
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        {/* <img 
                            src={getImageUrl("about/cursorIcon.png")}
                            alt="Cursor icon"
                        /> */}
                        <div>
                            {/* <h3>Frontend Developer</h3> */}
                            <p>raaaaaaaaa</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}