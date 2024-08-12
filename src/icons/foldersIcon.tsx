import React from 'react'
import { Icon, IconProps } from '../Icon'

export function foldersIcon({ iconName = "folders", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}