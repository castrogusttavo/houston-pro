import React from 'react'
import { Icon, IconProps } from '../Icon'

export function noteRemoveIcon({ iconName = "note-remove", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}