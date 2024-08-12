import React from 'react'
import { Icon, IconProps } from '../Icon'

export function slowWindsIcon({ iconName = "slow-winds", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}