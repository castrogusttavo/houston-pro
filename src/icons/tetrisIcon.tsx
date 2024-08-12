import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tetrisIcon({ iconName = "tetris", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}