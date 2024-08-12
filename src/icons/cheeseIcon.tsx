import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cheeseIcon({ iconName = "cheese", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}