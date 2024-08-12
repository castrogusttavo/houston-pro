import React from 'react'
import { Icon, IconProps } from '../Icon'

export function groupItemsIcon({ iconName = "group-items", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}