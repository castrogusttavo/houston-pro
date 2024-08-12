import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderFavouriteIcon({ iconName = "folder-favourite", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}