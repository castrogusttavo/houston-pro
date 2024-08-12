import React from 'react'
import { Icon, IconProps } from '../Icon'

export function plugSocketIcon({ iconName = "plug-socket", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}