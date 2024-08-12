import React from 'react'
import { Icon, IconProps } from '../Icon'

export function upload01Icon({ iconName = "upload01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}