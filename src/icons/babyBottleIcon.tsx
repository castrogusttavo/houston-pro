import React from 'react'
import { Icon, IconProps } from '../Icon'

export function babyBottleIcon({ iconName = "baby-bottle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}