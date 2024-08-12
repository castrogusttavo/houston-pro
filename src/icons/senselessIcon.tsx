import React from 'react'
import { Icon, IconProps } from '../Icon'

export function senselessIcon({ iconName = "senseless", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}