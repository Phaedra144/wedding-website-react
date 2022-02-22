import React from 'react'
import styles from './ImageGrid.module.scss'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ImageGrid = ({ images = [] }) => (
  <div className={styles.gridWrapper}>
    {images.map((image) => (
    <Zoom>
      <img
        src={image.src}
        key={image.src}
        alt={image.caption}
        className={styles.image}
      />
    </Zoom>
    ))}
  </div>
)

export default ImageGrid
