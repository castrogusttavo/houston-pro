import React from 'react'
import { Icon, IconProps } from '../Icon'

export function amieIcon({ iconName = "amie", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}