import React from 'react'
import { Icon, IconProps } from '../Icon'

export function subpoenaIcon({ iconName = "subpoena", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}