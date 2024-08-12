import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bug01Icon({ iconName = "bug01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}