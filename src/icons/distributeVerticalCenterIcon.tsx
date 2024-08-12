import React from 'react'
import { Icon, IconProps } from '../Icon'

export function distributeVerticalCenterIcon({ iconName = "distribute-vertical-center", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}