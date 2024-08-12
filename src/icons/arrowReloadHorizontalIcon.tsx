import React from 'react'
import { Icon, IconProps } from '../Icon'

export function arrowReloadHorizontalIcon({ iconName = "arrow-reload-horizontal", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}