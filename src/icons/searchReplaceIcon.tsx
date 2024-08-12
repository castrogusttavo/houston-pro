import React from 'react'
import { Icon, IconProps } from '../Icon'

export function searchReplaceIcon({ iconName = "search-replace", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}