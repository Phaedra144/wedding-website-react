import React, { useState } from 'react'
import styles from './App.module.scss'
import Header from './components/header/Header'
import Navbar from './components/navigation/Navbar'
import FormsSection from './components/sections/FormsSection'
import ImageGridSection from './components/sections/ImageGridSection'
import ImageSection from './components/sections/ImageSection'
import InstagramWallSection from './components/sections/InstagramWallSection'
import MapSection from './components/sections/MapSection'
import ModalSection from './components/sections/ModalSection'
import Section from './components/sections/Section'
import TimelineSection from './components/sections/TimelineSection'
import contentEng from './customize/content.json'
import contentHun from './customize/content_hun.json'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !process.env.REACT_APP_SECRET_CODE
  )
  const [isEnglish, setIsEnglish] = useState(false)

  const checkSecretCode = (value) => {
    if (value === process.env.REACT_APP_SECRET_CODE) {
      setIsLoggedIn(true)
      window.gtag('event', 'login')
    }
  }

  const isFuture = (date) => new Date(date) > new Date()

  const sectionComponents = {
    FormsSection,
    ImageSection,
    ImageGridSection,
    InstagramWallSection,
    MapSection,
    ModalSection,
    Section,
    TimelineSection,
  }

  const contentText = isEnglish ? contentEng : contentHun

  const sections = contentText.sections.filter((section) => {
    const startDate = section.startDate
    const endDate = section.endDate
    return !(
      (startDate && isFuture(startDate)) ||
      (endDate && !isFuture(endDate))
    )
  })

  const navItems = sections
    .filter((section) => section.inNavbar)
    .map((section) => ({
      id: section.id,
      title: section.title,
    }))

  const renderLanguageSwitch = () => {
    if (isEnglish) {
      return (
        <>
          Ez az oldal elérhető{' '}
          <span
            className={styles.languageSwitch}
            role="button"
            onClick={() => {
              document.documentElement.lang = "hu"
              setIsEnglish(false)
            }}
          >
            magyarul
          </span>{' '}
          is.
        </>
      )
    } else {
      return (
        <>
          This content is available in{' '}
          <span
            className={styles.languageSwitch}
            role="button"
            onClick={() => {
              document.documentElement.lang = "en"
              setIsEnglish(true)
            }}
          >
            english
          </span>
          .
        </>
      )
    }
  }

  return (
    <div className={styles.app}>
      <header>
        {isLoggedIn && <Navbar items={navItems} />}
        <div className={styles.languageSelector}>{renderLanguageSwitch()}</div>
        <Header
          {...contentText.header}
          scrollTo={sections.length > 0 && sections[0].id}
          isLoggedIn={isLoggedIn}
          onInputChange={checkSecretCode}
        />
      </header>
      {isLoggedIn && (
        <main className={styles.main}>
          {sections.map(({ type, ...sectionContent }) => {
            const SectionComponent = sectionComponents[type] || Section
            return (
              <SectionComponent key={sectionContent.id} {...sectionContent} />
            )
          })}
        </main>
      )}
    </div>
  )
}

export default App
