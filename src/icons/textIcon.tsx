import React from 'react'
import { Icon, IconProps } from '../Icon'

export function textIcon({ iconName = "text", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}