import React from 'react'
import { Icon, IconProps } from '../Icon'

export function adzanIcon({ iconName = "adzan", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}