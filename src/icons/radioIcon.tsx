import React from 'react'
import { Icon, IconProps } from '../Icon'

export function radioIcon({ iconName = "radio", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}