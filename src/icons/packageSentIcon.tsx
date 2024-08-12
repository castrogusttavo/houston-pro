import React from 'react'
import { Icon, IconProps } from '../Icon'

export function packageSentIcon({ iconName = "package-sent", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}