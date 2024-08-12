import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rhombusIcon({ iconName = "rhombus", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}