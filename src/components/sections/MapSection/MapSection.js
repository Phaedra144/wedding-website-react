import React from 'react'
import MapLocation from './MapLocation'
import styles from './MapSection.module.scss'

const MapSection = ({ id, locations, showLocationTextSection = true }) => {
  return (
    <section className={styles.section} id={id}>
      {showLocationTextSection && (
        <div className={styles.subsectionWrapper}>
          {locations &&
            locations.map((location) => (
              <MapLocation
                icon={location.icon}
                title={location.title}
                text={location.text}
                hovered={location.id}
                key={location.id}
              />
            ))}
        </div>
      )}
      <div className={styles.subsectionWrapper}>
        <iframe
          title="Tamás tanya térkép"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2716.073042319567!2d19.63047061496746!3d47.09763873099158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474178d605313f6d%3A0xf0d6e5ed0071e7b4!2sTam%C3%A1s%20Tanya%20Kft!5e0!3m2!1shu!2shu!4v1645713144060!5m2!1shu!2shu"
          style={{ border: 0 }}
          width="100%"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}

export default MapSection
