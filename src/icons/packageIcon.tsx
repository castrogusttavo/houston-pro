import React from 'react'
import { Icon, IconProps } from '../Icon'

export function packageIcon({ iconName = "package", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}