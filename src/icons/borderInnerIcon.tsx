import React from 'react'
import { Icon, IconProps } from '../Icon'

export function borderInnerIcon({ iconName = "border-inner", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}