import React from 'react'
import { Icon, IconProps } from '../Icon'

export function clothesIcon({ iconName = "clothes", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}