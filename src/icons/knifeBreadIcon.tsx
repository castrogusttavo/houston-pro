import React from 'react'
import { Icon, IconProps } from '../Icon'

export function knifeBreadIcon({ iconName = "knife-bread", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}