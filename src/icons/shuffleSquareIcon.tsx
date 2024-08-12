import React from 'react'
import { Icon, IconProps } from '../Icon'

export function shuffleSquareIcon({ iconName = "shuffle-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}