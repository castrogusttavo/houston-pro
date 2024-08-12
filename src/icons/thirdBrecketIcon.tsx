import React from 'react'
import { Icon, IconProps } from '../Icon'

export function thirdBrecketIcon({ iconName = "third-brecket", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}