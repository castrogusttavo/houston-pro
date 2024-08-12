import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rootCircleIcon({ iconName = "root-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}