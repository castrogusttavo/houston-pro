import React from 'react'
import { Icon, IconProps } from '../Icon'

export function jobSearchIcon({ iconName = "job-search", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}