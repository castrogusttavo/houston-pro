import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ampouleIcon({ iconName = "ampoule", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}