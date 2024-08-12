import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cursorTextIcon({ iconName = "cursor-text", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}