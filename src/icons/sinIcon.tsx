import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sinIcon({ iconName = "sin", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}