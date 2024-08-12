import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FirstBracketIcon({
  iconName = 'first-bracket',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
