import React from 'react'
import { Icon, IconProps } from '../Icon'

export function distributeHorizontalRightIcon({ iconName = "distribute-horizontal-right", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}