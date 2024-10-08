import { CalendarConfig, createCalendar } from '@schedule-x/calendar'
import { useState } from 'preact/hooks'

export function useCalendarApp(config: CalendarConfig) {
  const [calendarApp] = useState(() => createCalendar(config))

  return calendarApp
}
