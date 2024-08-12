import React from 'react'
import { Icon, IconProps } from '../Icon'

export function obtuseIcon({ iconName = "obtuse", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}