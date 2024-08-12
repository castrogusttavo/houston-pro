import React from 'react'
import { Icon, IconProps } from '../Icon'

export function noteIcon({ iconName = "note", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}