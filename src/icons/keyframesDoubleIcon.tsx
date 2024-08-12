import React from 'react'
import { Icon, IconProps } from '../Icon'

export function keyframesDoubleIcon({ iconName = "keyframes-double", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}