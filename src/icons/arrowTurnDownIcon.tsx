import React from 'react'
import { Icon, IconProps } from '../Icon'

export function arrowTurnDownIcon({ iconName = "arrow-turn-down", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}