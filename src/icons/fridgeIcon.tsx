import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fridgeIcon({ iconName = "fridge", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}