import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ethereumIcon({ iconName = "ethereum", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}