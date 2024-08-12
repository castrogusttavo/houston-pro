import React from 'react'
import { Icon, IconProps } from '../Icon'

export function boxingBagIcon({ iconName = "boxing-bag", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}