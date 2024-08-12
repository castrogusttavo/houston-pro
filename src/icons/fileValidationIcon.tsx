import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileValidationIcon({ iconName = "file-validation", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}