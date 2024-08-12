import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dropperIcon({ iconName = "dropper", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}