import React from 'react'
import { Icon, IconProps } from '../Icon'

export function discoverSquareIcon({ iconName = "discover-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}