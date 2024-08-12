import React from 'react'
import { Icon, IconProps } from '../Icon'

export function wheelchairIcon({ iconName = "wheelchair", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}