import React from 'react'
import { Icon, IconProps } from '../Icon'

export function factoryIcon({ iconName = "factory", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}