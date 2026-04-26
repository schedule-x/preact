import { CalendarApp, CalendarConfig, createCalendar } from '@schedule-x/calendar'
import { PluginBase } from '@schedule-x/shared'
import { useState } from 'preact/hooks'

export function useCalendarApp<Plugins extends PluginBase<string>[]>(
  config: CalendarConfig,
  plugins?: Plugins
): CalendarApp {
  const [calendarApp] = useState(() => createCalendar(config, plugins))

  return calendarApp
}
