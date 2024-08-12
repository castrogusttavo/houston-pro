import React from 'react'
import { Icon, IconProps } from '../Icon'

export function googleSheetIcon({ iconName = "google-sheet", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}