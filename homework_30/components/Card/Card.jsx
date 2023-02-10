import React from "react";
import styles from './Card.module.css'

const Card = (props) => {
    const {title, author, students, level, rating, duration, modules, img} = props
    return (
        <div className={styles.Card}>
            <div>{img}</div>
            <div>{level}</div>
            <div>{title}</div>
            <div className={styles.flex}>
                <span>{author}</span>
                <span>{rating}</span>
            </div>
            <div className={styles.flex}>
                <span>{students}</span>
                <span>{modules}</span>
                <span>{duration}</span>
            </div>
        </div>
    )
}

export default Card;