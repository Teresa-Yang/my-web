import React from 'react'
import styles from "./Home.module.css"
import { getImageUrl } from '../../utils'

export const Home = () => {
    return(
    <section className={styles.container}>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
        
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm Teresa
            </h1>
            <p className={styles.description}>
                raaaaaaaaaa
            </p>
            {/* <a href="mailto:myemail@email.com">contact me</a> */}
        </div>
        <img 
            src={getImageUrl("hero/redPanda.png")} 
            alt="hero image of me"
            className={styles.heroImg}
        />
    </section>
    )
}