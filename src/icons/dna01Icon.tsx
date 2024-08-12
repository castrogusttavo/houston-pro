import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dna01Icon({ iconName = "dna01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}