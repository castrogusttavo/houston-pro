import React from 'react'
import { Icon, IconProps } from '../Icon'

export function podiumIcon({ iconName = "podium", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}