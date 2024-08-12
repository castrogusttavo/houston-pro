import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dropletIcon({ iconName = "droplet", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}