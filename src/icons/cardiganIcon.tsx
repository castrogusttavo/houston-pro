import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cardiganIcon({ iconName = "cardigan", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}