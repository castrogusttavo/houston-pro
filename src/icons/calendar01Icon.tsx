import React from 'react'
import { Icon, IconProps } from '../Icon'

export function calendar01Icon({ iconName = "calendar01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}