import React from 'react'
import { Icon, IconProps } from '../Icon'

export function packageRemoveIcon({ iconName = "package-remove", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}