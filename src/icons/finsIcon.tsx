import React from 'react'
import { Icon, IconProps } from '../Icon'

export function finsIcon({ iconName = "fins", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}