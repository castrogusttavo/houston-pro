import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cancelSquareIcon({ iconName = "cancel-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}