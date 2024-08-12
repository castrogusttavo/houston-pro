import React from 'react'
import { Icon, IconProps } from '../Icon'

export function handcuffsIcon({ iconName = "handcuffs", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}