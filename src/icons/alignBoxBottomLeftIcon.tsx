import React from 'react'
import { Icon, IconProps } from '../Icon'

export function alignBoxBottomLeftIcon({ iconName = "align-box-bottom-left", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}