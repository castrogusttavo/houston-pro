import React from 'react'
import { Icon, IconProps } from '../Icon'

export function castleIcon({ iconName = "castle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}