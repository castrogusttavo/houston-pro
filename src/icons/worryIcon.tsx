import React from 'react'
import { Icon, IconProps } from '../Icon'

export function worryIcon({ iconName = "worry", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}