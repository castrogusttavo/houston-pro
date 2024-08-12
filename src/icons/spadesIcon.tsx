import React from 'react'
import { Icon, IconProps } from '../Icon'

export function spadesIcon({ iconName = "spades", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}