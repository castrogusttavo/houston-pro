import React from 'react'
import { Icon, IconProps } from '../Icon'

export function corporateIcon({ iconName = "corporate", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}