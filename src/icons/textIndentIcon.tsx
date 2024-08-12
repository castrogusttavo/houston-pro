import React from 'react'
import { Icon, IconProps } from '../Icon'

export function textIndentIcon({ iconName = "text-indent", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}