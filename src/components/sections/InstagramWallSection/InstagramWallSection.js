import React from 'react'
import ImageSection from '../ImageSection'
import Section from '../Section'
import InstagramWall from './InstagramWall'

const InstagramWallSection = ({ youTubeUrl, ...rest }) => (
  <ImageSection
    {...rest}
    childComponent={<InstagramWall youTubeUrl={youTubeUrl} />}
  />
)

export default InstagramWallSection
