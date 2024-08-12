import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sun03Icon({ iconName = "sun03", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}