import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bacteriaIcon({ iconName = "bacteria", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}