import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mirrorIcon({ iconName = "mirror", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}