import React from 'react'
import { Icon, IconProps } from '../Icon'

export function distributeHorizontalLeftIcon({ iconName = "distribute-horizontal-left", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}