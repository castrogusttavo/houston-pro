import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fingerPrintMinusIcon({ iconName = "finger-print-minus", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}