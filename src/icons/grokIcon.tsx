import React from 'react'
import { Icon, IconProps } from '../Icon'

export function grokIcon({ iconName = "grok", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}