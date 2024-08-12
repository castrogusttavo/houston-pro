import React from 'react'
import { Icon, IconProps } from '../Icon'

export function noMeetingRoomIcon({ iconName = "no-meeting-room", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}