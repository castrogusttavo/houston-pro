import React from 'react'
import { Icon, IconProps } from '../Icon'

export function serviceIcon({ iconName = "service", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}