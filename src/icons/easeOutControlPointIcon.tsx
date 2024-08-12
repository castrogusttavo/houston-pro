import React from 'react'
import { Icon, IconProps } from '../Icon'

export function easeOutControlPointIcon({ iconName = "ease-out-control-point", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}