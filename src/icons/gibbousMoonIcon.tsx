import React from 'react'
import { Icon, IconProps } from '../Icon'

export function gibbousMoonIcon({ iconName = "gibbous-moon", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}