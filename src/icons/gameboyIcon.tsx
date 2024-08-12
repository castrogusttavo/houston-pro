import React from 'react'
import { Icon, IconProps } from '../Icon'

export function gameboyIcon({ iconName = "gameboy", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}