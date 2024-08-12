import React from 'react'
import { Icon, IconProps } from '../Icon'

export function zoomInAreaIcon({ iconName = "zoom-in-area", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}