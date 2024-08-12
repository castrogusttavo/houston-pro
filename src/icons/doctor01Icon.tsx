import React from 'react'
import { Icon, IconProps } from '../Icon'

export function doctor01Icon({ iconName = "doctor01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}