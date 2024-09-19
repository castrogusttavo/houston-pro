import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HackerrankIcon({ iconName = 'hackerrank-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
