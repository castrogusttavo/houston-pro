import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chefIcon({ iconName = "chef", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}