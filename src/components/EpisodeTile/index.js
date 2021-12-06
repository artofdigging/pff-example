import react from "react";
import styles from "./episode-tile.module.css";


const EpisodeTile = (props) => {
  return (
    <div className={styles.episodeTile}>
      <img className={styles.episodeImage} src={props.image} alt="" />
      <div className={styles.episodeTitle}>{props.title}</div>
      <div className={styles.episodeDescription}>{props.description}</div>
      <div className={styles.episodeDate}>{props.date}</div>
    </div>
  )
}

export default EpisodeTile;