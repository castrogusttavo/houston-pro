import React from 'react'
import { Icon, IconProps } from '../Icon'

export function zoomSquareIcon({ iconName = "zoom-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}