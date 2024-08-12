import React from 'react'
import { Icon, IconProps } from '../Icon'

export function computerAddIcon({ iconName = "computer-add", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}