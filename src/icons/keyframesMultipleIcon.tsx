import React from 'react'
import { Icon, IconProps } from '../Icon'

export function keyframesMultipleIcon({ iconName = "keyframes-multiple", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}