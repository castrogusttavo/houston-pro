import React from 'react'
import { Icon, IconProps } from '../Icon'

export function removeCircleIcon({ iconName = "remove-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}