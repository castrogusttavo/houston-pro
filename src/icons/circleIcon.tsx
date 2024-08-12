import React from 'react'
import { Icon, IconProps } from '../Icon'

export function circleIcon({ iconName = "circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}