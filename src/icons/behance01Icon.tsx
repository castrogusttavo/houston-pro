import React from 'react'
import { Icon, IconProps } from '../Icon'

export function behance01Icon({ iconName = "behance01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}