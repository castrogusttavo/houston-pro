import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Gif01Icon({ iconName = "gif01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}