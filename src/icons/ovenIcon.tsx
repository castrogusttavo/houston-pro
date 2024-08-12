import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ovenIcon({ iconName = "oven", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}