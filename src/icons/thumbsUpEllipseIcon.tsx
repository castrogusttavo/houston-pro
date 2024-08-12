import React from 'react'
import { Icon, IconProps } from '../Icon'

export function thumbsUpEllipseIcon({ iconName = "thumbs-up-ellipse", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}