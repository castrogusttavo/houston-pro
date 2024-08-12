import React from 'react'
import { Icon, IconProps } from '../Icon'

export function arcBrowserIcon({ iconName = "arc-browser", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}