import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fingerPrintScanIcon({ iconName = "finger-print-scan", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}