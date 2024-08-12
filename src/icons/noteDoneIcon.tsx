import React from 'react'
import { Icon, IconProps } from '../Icon'

export function noteDoneIcon({ iconName = "note-done", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}