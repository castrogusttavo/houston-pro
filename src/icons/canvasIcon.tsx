import React from 'react'
import { Icon, IconProps } from '../Icon'

export function canvasIcon({ iconName = "canvas", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}