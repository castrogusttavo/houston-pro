import React from 'react'
import { Icon, IconProps } from '../Icon'

export function strategyIcon({ iconName = "strategy", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}