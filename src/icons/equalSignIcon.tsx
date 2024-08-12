import React from 'react'
import { Icon, IconProps } from '../Icon'

export function equalSignIcon({ iconName = "equal-sign", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}