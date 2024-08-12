import React from 'react'
import { Icon, IconProps } from '../Icon'

export function helicopterIcon({ iconName = "helicopter", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}