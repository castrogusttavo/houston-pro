import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fingerPrintIcon({ iconName = "finger-print", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}