<script setup lang="ts">
import CalendarExamples from './CalendarExamples.vue'
import { calendarExamplesCode } from '@/docs/snippets/calendarExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { ref } from 'vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(calendarExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <CalendarExamples />
    <Card>
      <CardHeader class="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Source</CardTitle>
          <CardDescription>Copy and paste into your project</CardDescription>
        </div>
        <Button variant="outline" size="sm" @click="copy">
          <span v-if="!copied">Copy</span>
          <span v-else>Copied</span>
        </Button>
      </CardHeader>
      <CardContent>
        <CodeBlock :code="calendarExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props of the Calendar component</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Props</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Prop</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Default</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>modelValue</TableCell>
                <TableCell>DateValue | DateValue[] | undefined</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell>Selected date(s) (v-model)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>defaultValue</TableCell>
                <TableCell>DateValue</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell>Default selected date</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>placeholder</TableCell>
                <TableCell>DateValue</TableCell>
                <TableCell>auto</TableCell>
                <TableCell>Month to display when none selected</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>numberOfMonths</TableCell>
                <TableCell>number</TableCell>
                <TableCell>1</TableCell>
                <TableCell>Months rendered side by side</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>weekStartsOn</TableCell>
                <TableCell>0 | 1 | 2 | 3 | 4 | 5 | 6</TableCell>
                <TableCell>0</TableCell>
                <TableCell>Start day of week</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>weekdayFormat</TableCell>
                <TableCell>'narrow' | 'short' | 'long'</TableCell>
                <TableCell>'narrow'</TableCell>
                <TableCell>Format for weekday headings</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fixedWeeks</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Always show 6 weeks</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>minValue</TableCell>
                <TableCell>DateValue</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Minimum selectable date</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>maxValue</TableCell>
                <TableCell>DateValue</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Maximum selectable date</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>disabled</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Disable interactions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>readonly</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Readonly mode</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>initialFocus</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Focus a day on mount</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>pagedNavigation</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Navigate by numberOfMonths</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>multiple</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Allow selecting multiple dates</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>isDateDisabled</TableCell>
                <TableCell>(date: DateValue) => boolean</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Custom disabled matcher</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>isDateUnavailable</TableCell>
                <TableCell>(date: DateValue) => boolean</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Custom unavailable matcher</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>nextPage</TableCell>
                <TableCell>(placeholder: DateValue) => DateValue</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Override next page calculation</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>prevPage</TableCell>
                <TableCell>(placeholder: DateValue) => DateValue</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Override previous page calculation</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>dir</TableCell>
                <TableCell>'ltr' | 'rtl'</TableCell>
                <TableCell>global</TableCell>
                <TableCell>Direction reading mode</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>locale</TableCell>
                <TableCell>string</TableCell>
                <TableCell>global</TableCell>
                <TableCell>Locale used for formatting</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>disableDaysOutsideCurrentView</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Disable selection of outside days</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <p class="text-sm text-muted-foreground">
            For range selection, use the RangeCalendar component exported under <code>@/components/ui/range-calendar</code>.
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
