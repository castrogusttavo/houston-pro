import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sunriseIcon({ iconName = "sunrise", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}