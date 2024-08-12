import React from 'react'
import { Icon, IconProps } from '../Icon'

export function yenSquareIcon({ iconName = "yen-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}