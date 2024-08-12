import React from 'react'
import { Icon, IconProps } from '../Icon'

export function arrowTurnUpIcon({ iconName = "arrow-turn-up", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}