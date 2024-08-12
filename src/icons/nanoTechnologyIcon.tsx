import React from 'react'
import { Icon, IconProps } from '../Icon'

export function nanoTechnologyIcon({ iconName = "nano-technology", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}