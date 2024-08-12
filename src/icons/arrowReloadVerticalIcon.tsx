import React from 'react'
import { Icon, IconProps } from '../Icon'

export function arrowReloadVerticalIcon({ iconName = "arrow-reload-vertical", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}