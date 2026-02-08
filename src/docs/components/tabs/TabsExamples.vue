<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
</script>

<template>
  <div class="flex w-full max-w-sm flex-col gap-6">
    <Tabs default-value="account">
      <TabsList class="grid w-full grid-cols-2">
        <TabsTrigger value="account">
          Account
        </TabsTrigger>
        <TabsTrigger value="password">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div class="space-y-4 pt-4">
          <div class="space-y-2">
            <h3 class="text-lg font-medium">Account</h3>
            <p class="text-sm text-muted-foreground">
              Make changes to your account here. Click save when you're done.
            </p>
          </div>
          <div class="grid gap-4">
            <div class="grid gap-2">
              <Label for="tabs-demo-name">Name</Label>
              <Input id="tabs-demo-name" default-value="Pedro Duarte" />
            </div>
            <div class="grid gap-2">
              <Label for="tabs-demo-username">Username</Label>
              <Input id="tabs-demo-username" default-value="@peduarte" />
            </div>
          </div>
          <Button class="w-full">Save changes</Button>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div class="space-y-4 pt-4">
          <div class="space-y-2">
            <h3 class="text-lg font-medium">Password</h3>
            <p class="text-sm text-muted-foreground">
              Change your password here. After saving, you'll be logged out.
            </p>
          </div>
          <div class="grid gap-4">
            <div class="grid gap-2">
              <Label for="tabs-demo-current">Current password</Label>
              <Input id="tabs-demo-current" type="password" />
            </div>
            <div class="grid gap-2">
              <Label for="tabs-demo-new">New password</Label>
              <Input id="tabs-demo-new" type="password" />
            </div>
          </div>
          <Button class="w-full">Save password</Button>
        </div>
      </TabsContent>
    </Tabs>
  </div>
</template>
