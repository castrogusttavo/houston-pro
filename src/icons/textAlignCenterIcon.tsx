import React from 'react'
import { Icon, IconProps } from '../Icon'

export function textAlignCenterIcon({ iconName = "text-align-center", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}