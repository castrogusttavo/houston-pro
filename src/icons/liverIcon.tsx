import React from 'react'
import { Icon, IconProps } from '../Icon'

export function liverIcon({ iconName = "liver", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}