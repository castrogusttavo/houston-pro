import React from 'react'
import { Icon, IconProps } from '../Icon'

export function picasaIcon({ iconName = "picasa", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}