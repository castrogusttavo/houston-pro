import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Shaka03Icon({ iconName = "shaka03", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}