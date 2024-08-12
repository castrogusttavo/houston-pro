import React from 'react'
import { Icon, IconProps } from '../Icon'

export function firstBracketCircleIcon({ iconName = "first-bracket-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}