import React from 'react'
import { Icon, IconProps } from '../Icon'

export function googleDriveIcon({ iconName = "google-drive", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}