import React from 'react'
import { Icon, IconProps } from '../Icon'

export function circleArrowUpDownIcon({ iconName = "circle-arrow-up-down", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}