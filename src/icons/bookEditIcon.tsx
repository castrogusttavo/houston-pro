import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bookEditIcon({ iconName = "book-edit", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}