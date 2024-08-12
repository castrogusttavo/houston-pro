import React from 'react'
import { Icon, IconProps } from '../Icon'

export function javaScriptIcon({ iconName = "java-script", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}