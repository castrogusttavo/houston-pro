import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rainIcon({ iconName = "rain", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}