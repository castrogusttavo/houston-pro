import React from 'react'
import { Icon, IconProps } from '../Icon'

export function purseIcon({ iconName = "purse", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}