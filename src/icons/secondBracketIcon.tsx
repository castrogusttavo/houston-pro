import React from 'react'
import { Icon, IconProps } from '../Icon'

export function secondBracketIcon({ iconName = "second-bracket", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}