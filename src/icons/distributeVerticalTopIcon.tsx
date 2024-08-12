import React from 'react'
import { Icon, IconProps } from '../Icon'

export function distributeVerticalTopIcon({ iconName = "distribute-vertical-top", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}