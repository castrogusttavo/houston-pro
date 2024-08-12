import React from 'react'
import { Icon, IconProps } from '../Icon'

export function strokeCenterIcon({ iconName = "stroke-center", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}