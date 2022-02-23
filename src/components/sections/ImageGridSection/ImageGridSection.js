import React from 'react'
import ImageSection from '../ImageSection'
import Section from '../Section/Section'
import ImageGrid from './ImageGrid'

const ImageGridSection = ({ images, ...rest }) => (
  <Section {...rest} childComponent={<ImageGrid images={images} />} />
)

export default ImageGridSection
