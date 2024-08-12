import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sunsetIcon({ iconName = "sunset", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}