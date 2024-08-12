import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SecondBracketIcon({ iconName = "second-bracket", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}