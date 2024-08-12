import React from 'react'
import { Icon, IconProps } from '../Icon'

export function thirdBracketIcon({ iconName = "third-bracket", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}