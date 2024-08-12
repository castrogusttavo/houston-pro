import React from 'react'
import { Icon, IconProps } from '../Icon'

export function borderVerticalIcon({ iconName = "border-vertical", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}