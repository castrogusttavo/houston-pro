import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CIcon({ iconName = "c", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}