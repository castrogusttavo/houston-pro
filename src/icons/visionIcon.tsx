import React from 'react'
import { Icon, IconProps } from '../Icon'

export function visionIcon({ iconName = "vision", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}