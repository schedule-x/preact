import {CalendarApp, CalendarConfig, createCalendar,} from '@schedule-x/calendar'
import {useEffect, useState} from 'preact/hooks'
import {signal} from '@preact/signals'

const calendarApp = signal<CalendarApp | null>(null);

export function useCalendarApp(config: CalendarConfig) {
  if (!calendarApp.value) calendarApp.value = createCalendar(config);
  return calendarApp.value;
}

export function useNextCalendarApp(config: CalendarConfig) {
  const [calendarApp, setCalendarApp] = useState<CalendarApp>()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCalendarApp(createCalendar(config))
    }
  }, [])

  return calendarApp
}
