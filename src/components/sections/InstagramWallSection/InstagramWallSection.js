import React from 'react'
import ImageSection from '../ImageSection'
import InstagramWall from './InstagramWall'

const InstagramWallSection = ({ youTubeUrl, ...rest }) => (
  <ImageSection
    {...rest}
    childComponent={<InstagramWall youTubeUrl={youTubeUrl} />}
  />
)

export default InstagramWallSection
