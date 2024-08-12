import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fryIcon({ iconName = "fry", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}