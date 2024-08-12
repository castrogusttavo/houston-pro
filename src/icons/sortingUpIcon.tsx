import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sortingUpIcon({ iconName = "sorting-up", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}