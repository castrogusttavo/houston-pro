import React from 'react'
import { Icon, IconProps } from '../Icon'

export function archerIcon({ iconName = "archer", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}