import React from 'react'
import { Icon, IconProps } from '../Icon'

export function aiBookIcon({ iconName = "ai-book", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}