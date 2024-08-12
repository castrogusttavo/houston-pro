import React from 'react'
import { Icon, IconProps } from '../Icon'

export function americanFootballIcon({ iconName = "american-football", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}