import React from 'react'
import { Icon, IconProps } from '../Icon'

export function documentCodeIcon({ iconName = "document-code", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}