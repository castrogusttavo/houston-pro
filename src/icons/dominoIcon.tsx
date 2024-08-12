import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dominoIcon({ iconName = "domino", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}