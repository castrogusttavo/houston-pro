import React from 'react'
import { Icon, IconProps } from '../Icon'

export function officeChairIcon({ iconName = "office-chair", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}