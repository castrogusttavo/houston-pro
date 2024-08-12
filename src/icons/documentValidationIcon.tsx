import React from 'react'
import { Icon, IconProps } from '../Icon'

export function documentValidationIcon({ iconName = "document-validation", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}