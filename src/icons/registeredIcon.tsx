import React from 'react'
import { Icon, IconProps } from '../Icon'

export function registeredIcon({ iconName = "registered", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}