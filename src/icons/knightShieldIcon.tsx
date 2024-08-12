import React from 'react'
import { Icon, IconProps } from '../Icon'

export function knightShieldIcon({ iconName = "knight-shield", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}