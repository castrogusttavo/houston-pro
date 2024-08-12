import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hutIcon({ iconName = "hut", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}