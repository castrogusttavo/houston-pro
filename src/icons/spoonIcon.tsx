import React from 'react'
import { Icon, IconProps } from '../Icon'

export function spoonIcon({ iconName = "spoon", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}