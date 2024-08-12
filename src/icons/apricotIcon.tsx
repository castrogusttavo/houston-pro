import React from 'react'
import { Icon, IconProps } from '../Icon'

export function apricotIcon({ iconName = "apricot", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}