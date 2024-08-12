import React from 'react'
import { Icon, IconProps } from '../Icon'

export function flimSlateIcon({ iconName = "flim-slate", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}