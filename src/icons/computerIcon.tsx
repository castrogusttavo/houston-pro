import React from 'react'
import { Icon, IconProps } from '../Icon'

export function computerIcon({ iconName = "computer", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}