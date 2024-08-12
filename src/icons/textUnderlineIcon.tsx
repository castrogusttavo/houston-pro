import React from 'react'
import { Icon, IconProps } from '../Icon'

export function textUnderlineIcon({ iconName = "text-underline", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}