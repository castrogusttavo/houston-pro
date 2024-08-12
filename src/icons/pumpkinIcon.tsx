import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pumpkinIcon({ iconName = "pumpkin", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}