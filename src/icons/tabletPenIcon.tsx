import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tabletPenIcon({ iconName = "tablet-pen", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}