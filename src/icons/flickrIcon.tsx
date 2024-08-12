import React from 'react'
import { Icon, IconProps } from '../Icon'

export function flickrIcon({ iconName = "flickr", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}