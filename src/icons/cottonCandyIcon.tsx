import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cottonCandyIcon({ iconName = "cotton-candy", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}