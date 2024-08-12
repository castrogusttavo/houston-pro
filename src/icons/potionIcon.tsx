import React from 'react'
import { Icon, IconProps } from '../Icon'

export function potionIcon({ iconName = "potion", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}