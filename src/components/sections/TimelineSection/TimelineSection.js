import React from 'react'
import ImageSection from '../ImageSection'
import Timeline from './Timeline'

const TimelineSection = ({ timeline, ...rest }) => (
  <ImageSection {...rest} childComponent={<Timeline items={timeline}/>} />
)

export default TimelineSection
