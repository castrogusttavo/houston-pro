import React from 'react'
import { Icon, IconProps } from '../Icon'

export function insertTopImageIcon({ iconName = "insert-top-image", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}