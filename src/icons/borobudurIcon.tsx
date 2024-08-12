import React from 'react'
import { Icon, IconProps } from '../Icon'

export function borobudurIcon({ iconName = "borobudur", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}