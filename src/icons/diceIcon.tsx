import React from 'react'
import { Icon, IconProps } from '../Icon'

export function diceIcon({ iconName = "dice", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}