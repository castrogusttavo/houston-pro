import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tankTopIcon({ iconName = "tank-top", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}