import React from 'react'
import { Icon, IconProps } from '../Icon'

export function alignVerticalCenterIcon({ iconName = "align-vertical-center", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}