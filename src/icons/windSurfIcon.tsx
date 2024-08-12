import React from 'react'
import { Icon, IconProps } from '../Icon'

export function windSurfIcon({ iconName = "wind-surf", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}