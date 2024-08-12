import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pisaTowerIcon({ iconName = "pisa-tower", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}