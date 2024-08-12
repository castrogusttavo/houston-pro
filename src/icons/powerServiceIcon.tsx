import React from 'react'
import { Icon, IconProps } from '../Icon'

export function powerServiceIcon({ iconName = "power-service", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}