import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chessPawnIcon({ iconName = "chess-pawn", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}