import React from 'react'
import { Icon, IconProps } from '../Icon'

export function textBoldIcon({ iconName = "text-bold", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}