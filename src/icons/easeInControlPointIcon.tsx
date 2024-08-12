import React from 'react'
import { Icon, IconProps } from '../Icon'

export function easeInControlPointIcon({ iconName = "ease-in-control-point", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}