import React from 'react'
import { Icon, IconProps } from '../Icon'

export function textFirstlineLeftIcon({ iconName = "text-firstline-left", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}