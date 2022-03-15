import React from 'react'
import styles from './InstagramWall.module.scss'

const InstagramWall = ({ youTubeUrl }) => (
  <div className={styles.wrapper}>
    <iframe
      width="100%"
      height="315"
      src={youTubeUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen>

    </iframe>
  </div>
)

export default InstagramWall
