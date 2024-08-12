import React from 'react'
import { Icon, IconProps } from '../Icon'

export function diggIcon({ iconName = "digg", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}