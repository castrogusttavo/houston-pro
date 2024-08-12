import React from 'react'
import { Icon, IconProps } from '../Icon'

export function invoiceIcon({ iconName = "invoice", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}