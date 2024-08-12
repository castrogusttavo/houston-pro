import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tajMahalIcon({ iconName = "taj-mahal", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}