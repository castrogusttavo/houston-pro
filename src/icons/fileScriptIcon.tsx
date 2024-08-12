import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileScriptIcon({ iconName = "file-script", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}