import React from 'react'
import { Icon, IconProps } from '../Icon'

export function externalDriveIcon({ iconName = "external-drive", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}