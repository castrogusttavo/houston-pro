import React from 'react'
import { Icon, IconProps } from '../Icon'

export function blackHoleIcon({ iconName = "black-hole", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}