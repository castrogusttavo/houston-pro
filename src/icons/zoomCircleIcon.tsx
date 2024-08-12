import React from 'react'
import { Icon, IconProps } from '../Icon'

export function zoomCircleIcon({ iconName = "zoom-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}