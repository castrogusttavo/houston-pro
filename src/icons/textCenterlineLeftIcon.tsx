import React from 'react'
import { Icon, IconProps } from '../Icon'

export function textCenterlineLeftIcon({ iconName = "text-centerline-left", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}