import React from 'react'
import { Icon, IconProps } from '../Icon'

export function yenCircleIcon({ iconName = "yen-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}