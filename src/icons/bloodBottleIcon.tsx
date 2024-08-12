import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bloodBottleIcon({ iconName = "blood-bottle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}