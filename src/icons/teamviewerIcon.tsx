import React from 'react'
import { Icon, IconProps } from '../Icon'

export function teamviewerIcon({ iconName = "teamviewer", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}