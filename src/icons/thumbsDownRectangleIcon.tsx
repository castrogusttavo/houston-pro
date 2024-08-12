import React from 'react'
import { Icon, IconProps } from '../Icon'

export function thumbsDownRectangleIcon({ iconName = "thumbs-down-rectangle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}