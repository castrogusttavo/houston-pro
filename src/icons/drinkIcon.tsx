import React from 'react'
import { Icon, IconProps } from '../Icon'

export function drinkIcon({ iconName = "drink", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}