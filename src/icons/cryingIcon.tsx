import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cryingIcon({ iconName = "crying", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}