import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cloudIcon({ iconName = "cloud", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}