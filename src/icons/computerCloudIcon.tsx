import React from 'react'
import { Icon, IconProps } from '../Icon'

export function computerCloudIcon({ iconName = "computer-cloud", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}