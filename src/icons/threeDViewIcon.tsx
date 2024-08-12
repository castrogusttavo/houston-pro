import React from 'react'
import { Icon, IconProps } from '../Icon'

export function threeDViewIcon({ iconName = "three-d-view", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}