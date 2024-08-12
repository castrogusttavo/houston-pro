import React from 'react'
import { Icon, IconProps } from '../Icon'

export function forrstIcon({ iconName = "forrst", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}