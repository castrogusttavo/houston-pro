import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dnaIcon({ iconName = "dna", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}