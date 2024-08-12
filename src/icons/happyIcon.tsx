import React from 'react'
import { Icon, IconProps } from '../Icon'

export function happyIcon({ iconName = "happy", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}