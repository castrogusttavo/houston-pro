import React from 'react'
import { Icon, IconProps } from '../Icon'

export function matrixIcon({ iconName = "matrix", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}