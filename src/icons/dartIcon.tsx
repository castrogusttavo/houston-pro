import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dartIcon({ iconName = "dart", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}