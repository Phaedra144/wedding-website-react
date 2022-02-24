import React from 'react'
import ReactMarkdown from 'react-markdown'
import classNames from 'classnames'
import styles from './MapLocation.module.scss'
import { TrainIcon } from './TrainIcon'

const MapLocation = ({ icon, title, text, hovered }) => {
  let iconComp = <i className={`icon icon-${icon}`} />
  if (icon === 'train') {
    iconComp = <TrainIcon className={styles.trainIcon} />
  }

  return (
    <div className={styles.wrapper}>
      <h2
        className={classNames(styles.locationTitle, hovered && styles.hovered)}
      >
        {iconComp}
        {title}
      </h2>
      {!!text && <ReactMarkdown linkTarget="_blank">{text}</ReactMarkdown>}
    </div>
  )
}

export default MapLocation
