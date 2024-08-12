import React from 'react'
import { Icon, IconProps } from '../Icon'

export function laughingIcon({ iconName = "laughing", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}