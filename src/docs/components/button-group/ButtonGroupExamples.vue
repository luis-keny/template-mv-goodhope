<script setup lang="ts">
import { ArchiveIcon, ArrowLeftIcon, CalendarPlusIcon, ClockIcon, ListFilterPlusIcon, MailCheckIcon, MoreHorizontalIcon, TagIcon, Trash2Icon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ref } from 'vue'

const label = ref('personal')
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Button Group</CardTitle>
      <CardDescription>
        Agrupa una serie de botones juntos en una sola línea.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="flex flex-wrap gap-4">
        <ButtonGroup class="hidden sm:flex">
          <Button variant="outline" size="icon" aria-label="Go Back">
            <ArrowLeftIcon class="size-4" />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">
            Archive
          </Button>
          <Button variant="outline">
            Report
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">
            Snooze
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline" size="icon" aria-label="More Options">
                <MoreHorizontalIcon class="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" class="w-52">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <MailCheckIcon class="mr-2 size-4" />
                  Mark as Read
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ArchiveIcon class="mr-2 size-4" />
                  Archive
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <ClockIcon class="mr-2 size-4" />
                  Snooze
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CalendarPlusIcon class="mr-2 size-4" />
                  Add to Calendar
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ListFilterPlusIcon class="mr-2 size-4" />
                  Add to List
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <TagIcon class="mr-2 size-4" />
                    Label As...
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuRadioGroup v-model="label">
                      <DropdownMenuRadioItem value="personal">
                        Personal
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="work">
                        Work
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="other">
                        Other
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem variant="destructive">
                  <Trash2Icon class="mr-2 size-4" />
                  Trash
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
      </div>
    </CardContent>
  </Card>
</template>
