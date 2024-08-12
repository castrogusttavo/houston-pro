import React from 'react'
import { Icon, IconProps } from '../Icon'

export function borderHorizontalIcon({ iconName = "border-horizontal", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}