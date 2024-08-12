import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sujoodIcon({ iconName = "sujood", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}