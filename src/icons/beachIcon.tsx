import React from 'react'
import { Icon, IconProps } from '../Icon'

export function beachIcon({ iconName = "beach", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}