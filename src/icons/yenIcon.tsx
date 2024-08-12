import React from 'react'
import { Icon, IconProps } from '../Icon'

export function yenIcon({ iconName = "yen", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}