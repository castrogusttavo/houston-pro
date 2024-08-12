import React from 'react'
import { Icon, IconProps } from '../Icon'

export function investigationIcon({ iconName = "investigation", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}