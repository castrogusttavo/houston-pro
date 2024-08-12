import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ThirdBracketCircleIcon({
  iconName = 'third-bracket-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
