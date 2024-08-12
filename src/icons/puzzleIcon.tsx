import React from 'react'
import { Icon, IconProps } from '../Icon'

export function puzzleIcon({ iconName = "puzzle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}