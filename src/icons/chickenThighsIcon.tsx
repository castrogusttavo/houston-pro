import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chickenThighsIcon({ iconName = "chicken-thighs", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}