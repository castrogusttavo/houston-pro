import React from 'react'
import { Icon, IconProps } from '../Icon'

export function steakIcon({ iconName = "steak", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}