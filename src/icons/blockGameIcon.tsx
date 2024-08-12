import React from 'react'
import { Icon, IconProps } from '../Icon'

export function blockGameIcon({ iconName = "block-game", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}