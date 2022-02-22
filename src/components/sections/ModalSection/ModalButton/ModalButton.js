import React, { useState } from 'react'
import Button from '../../../shared/Button'
import Modal from '../../../shared/Modal'
import MapSection from '../../MapSection'
import Section from '../../Section/Section'

const ModalButton = ({ buttonText, isMap, ...modalContent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <p>
        <Button onClick={openModal}>{buttonText}</Button>
      </p>
      <Modal open={isModalOpen} onClose={closeModal}>
        {isMap && <MapSection {...modalContent} />}
        {!isMap && <Section {...modalContent} />}
      </Modal>
    </>
  )
}

export default ModalButton
