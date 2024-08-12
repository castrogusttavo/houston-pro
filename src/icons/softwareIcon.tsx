import React from 'react'
import { Icon, IconProps } from '../Icon'

export function softwareIcon({ iconName = "software", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}