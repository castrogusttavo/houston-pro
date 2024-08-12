import React from 'react'
import { Icon, IconProps } from '../Icon'

export function columnDeleteIcon({ iconName = "column-delete", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}