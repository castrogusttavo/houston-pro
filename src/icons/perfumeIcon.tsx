import React from 'react'
import { Icon, IconProps } from '../Icon'

export function perfumeIcon({ iconName = "perfume", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}