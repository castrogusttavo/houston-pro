import React from 'react'
import { Icon, IconProps } from '../Icon'

export function vanIcon({ iconName = "van", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}