import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Mp401Icon({ iconName = "mp4-01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}