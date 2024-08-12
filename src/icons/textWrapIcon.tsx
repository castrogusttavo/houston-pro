import React from 'react'
import { Icon, IconProps } from '../Icon'

export function textWrapIcon({ iconName = "text-wrap", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}