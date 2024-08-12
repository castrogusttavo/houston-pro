import React from 'react'
import { Icon, IconProps } from '../Icon'

export function zoomOutAreaIcon({ iconName = "zoom-out-area", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}