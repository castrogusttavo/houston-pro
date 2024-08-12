import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tieIcon({ iconName = "tie", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}