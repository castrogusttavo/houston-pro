import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FirstBracketSquareIcon({
  iconName = 'first-bracket-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
