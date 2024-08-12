import React from 'react'
import { Icon, IconProps } from '../Icon'

export function octagonIcon({ iconName = "octagon", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}