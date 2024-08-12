import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cursorLoading01Icon({ iconName = "cursor-loading01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}