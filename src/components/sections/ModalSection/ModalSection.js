import React from 'react'
import ImageSection from '../ImageSection'
import ModalButton from './ModalButton'

const ModalSection = ({ modal, ...rest }) => (
  <ImageSection {...rest} childComponent={<ModalButton {...modal} />} />
)

export default ModalSection
