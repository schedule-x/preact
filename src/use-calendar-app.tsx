import { CalendarApp, CalendarConfig, createCalendar } from '@schedule-x/calendar'
import { PluginBase } from '@schedule-x/shared'
import { useEffect, useState } from 'preact/hooks'

export function useCalendarApp<Plugins extends PluginBase<string>[]>(
  config: CalendarConfig,
  plugins?: Plugins
): CalendarApp | null {
  const [calendarApp, setCalendarApp] = useState<CalendarApp | null>(null)

  useEffect(() => {
    // intentionally only run on mount to create a single calendar instance
    setCalendarApp(createCalendar(config, plugins))
  }, [])

  return calendarApp
}
