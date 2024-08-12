import React from 'react'
import { Icon, IconProps } from '../Icon'

export function uberIcon({ iconName = "uber", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}