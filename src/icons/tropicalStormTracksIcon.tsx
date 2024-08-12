import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tropicalStormTracksIcon({ iconName = "tropical-storm-tracks", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}