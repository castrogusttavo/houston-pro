import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rocketIcon({ iconName = "rocket", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}