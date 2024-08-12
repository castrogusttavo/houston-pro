import React from 'react'
import { Icon, IconProps } from '../Icon'

export function discoverCircleIcon({ iconName = "discover-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}