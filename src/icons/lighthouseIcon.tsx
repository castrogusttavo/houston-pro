import React from 'react'
import { Icon, IconProps } from '../Icon'

export function lighthouseIcon({ iconName = "lighthouse", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}