import React from 'react'
import { Icon, IconProps } from '../Icon'

export function adventureIcon({ iconName = "adventure", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}