import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cottageIcon({ iconName = "cottage", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}