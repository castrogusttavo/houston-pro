import React from 'react'
import { Icon, IconProps } from '../Icon'

export function schoolReportCardIcon({ iconName = "school-report-card", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}