import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pathIcon({ iconName = "path", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}