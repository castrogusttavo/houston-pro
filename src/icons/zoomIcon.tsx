import React from 'react'
import { Icon, IconProps } from '../Icon'

export function zoomIcon({ iconName = "zoom", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}