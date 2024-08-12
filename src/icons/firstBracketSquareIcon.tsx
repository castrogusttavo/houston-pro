import React from 'react'
import { Icon, IconProps } from '../Icon'

export function firstBracketSquareIcon({ iconName = "first-bracket-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}