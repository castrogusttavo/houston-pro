import React from 'react'
import { Icon, IconProps } from '../Icon'

export function halalIcon({ iconName = "halal", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}