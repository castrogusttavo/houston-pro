import React from 'react'
import { Icon, IconProps } from '../Icon'

export function milkOatIcon({ iconName = "milk-oat", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}