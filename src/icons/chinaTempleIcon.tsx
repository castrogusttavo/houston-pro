import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chinaTempleIcon({ iconName = "china-temple", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}