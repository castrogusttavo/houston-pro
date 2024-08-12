import React from 'react'
import { Icon, IconProps } from '../Icon'

export function arrowTurnBackwardIcon({ iconName = "arrow-turn-backward", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}