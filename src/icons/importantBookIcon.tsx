import React from 'react'
import { Icon, IconProps } from '../Icon'

export function importantBookIcon({ iconName = "important-book", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}