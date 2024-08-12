import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileFavouriteIcon({ iconName = "file-favourite", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}