import React from 'react'
import { Icon, IconProps } from '../Icon'

export function index.jsIcon({ iconName = "index.js", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}