import React from 'react'
import { Icon, IconProps } from '../Icon'

export function graduationScrollIcon({ iconName = "graduation-scroll", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}