import React from 'react'
import { Icon, IconProps } from '../Icon'

export function insertCenterImageIcon({ iconName = "insert-center-image", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}