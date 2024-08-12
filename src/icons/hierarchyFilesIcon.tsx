import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hierarchyFilesIcon({ iconName = "hierarchy-files", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}