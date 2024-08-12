import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sailboatCoastalIcon({ iconName = "sailboat-coastal", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}