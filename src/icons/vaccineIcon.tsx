import React from 'react'
import { Icon, IconProps } from '../Icon'

export function vaccineIcon({ iconName = "vaccine", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}