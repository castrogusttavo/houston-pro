import React from 'react'
import { Icon, IconProps } from '../Icon'

export function watermelonIcon({ iconName = "watermelon", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}