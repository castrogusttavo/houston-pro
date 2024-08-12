import React from 'react'
import { Icon, IconProps } from '../Icon'

export function transmissionIcon({ iconName = "transmission", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}