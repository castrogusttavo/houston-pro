import React from 'react'
import { Icon, IconProps } from '../Icon'

export function headingIcon({ iconName = "heading", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}