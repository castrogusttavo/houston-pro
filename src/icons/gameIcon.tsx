import React from 'react'
import { Icon, IconProps } from '../Icon'

export function gameIcon({ iconName = "game", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}