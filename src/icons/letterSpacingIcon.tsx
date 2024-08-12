import React from 'react'
import { Icon, IconProps } from '../Icon'

export function letterSpacingIcon({ iconName = "letter-spacing", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}