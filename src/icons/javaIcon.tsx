import React from 'react'
import { Icon, IconProps } from '../Icon'

export function javaIcon({ iconName = "java", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}