import React from 'react'
import { Icon, IconProps } from '../Icon'

export function textStrikethroughIcon({ iconName = "text-strikethrough", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}