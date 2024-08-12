import React from 'react'
import { Icon, IconProps } from '../Icon'

export function translateIcon({ iconName = "translate", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}