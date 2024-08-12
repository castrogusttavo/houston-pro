import React from 'react'
import { Icon, IconProps } from '../Icon'

export function insertBottomImageIcon({ iconName = "insert-bottom-image", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}