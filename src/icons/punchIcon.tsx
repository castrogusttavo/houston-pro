import React from 'react'
import { Icon, IconProps } from '../Icon'

export function punchIcon({ iconName = "punch", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}