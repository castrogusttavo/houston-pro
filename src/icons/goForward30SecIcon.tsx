import React from 'react'
import { Icon, IconProps } from '../Icon'

export function goForward30SecIcon({ iconName = "go-forward30-sec", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}