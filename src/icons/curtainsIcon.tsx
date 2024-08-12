import React from 'react'
import { Icon, IconProps } from '../Icon'

export function curtainsIcon({ iconName = "curtains", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}