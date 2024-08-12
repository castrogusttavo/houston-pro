import React from 'react'
import { Icon, IconProps } from '../Icon'

export function slideshareIcon({ iconName = "slideshare", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}