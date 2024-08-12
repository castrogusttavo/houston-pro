import React from 'react'
import { Icon, IconProps } from '../Icon'

export function patioIcon({ iconName = "patio", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}