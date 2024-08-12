import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pavilonIcon({ iconName = "pavilon", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}