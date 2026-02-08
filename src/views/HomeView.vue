<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Alert, AlertTitle } from '@/components/ui/alert'
import { 
  ChevronDown, 
  Search, 
  Plus,  
  Check, 
  Clock, 
  MoreHorizontal, 
  ChevronLeft, 
  ChevronRight,
  Globe,
  Info,
  Mic,
  ArrowUp,
  Loader2,
  AtSign
} from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

const priceRange = ref([200, 800])
const gpuCount = ref(8)
</script>

<template>
  <section class="container mx-auto p-4 space-y-8">
    <div class="flex flex-col items-center space-y-2 text-center py-5">
      <h1 class="text-4xl font-bold tracking-tight">La base de tu sistema de diseño</h1>
      <p class="text-lg text-muted-foreground max-w-[600px]">Un conjunto de componentes con un diseño atractivo que puedes personalizar, ampliar y desarrollar. Open source</p>
      <div class="space-x-2">
        <Button size="lg">
          <RouterLink to="/docs/introduction">Comenzar</RouterLink>
        </Button>
        <Button variant="ghost" size="lg" as-child>
          <RouterLink to="/docs/components">Ver componentes</RouterLink>
        </Button>
      </div>
    </div>

    <main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
      <!-- Columna 1: Payment Method -->
      <div class="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>All transactions are secure and encrypted</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="space-y-2">
              <Label for="name">Name on Card</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="col-span-2 space-y-2">
                <Label for="card">Card Number</Label>
                <Input id="card" placeholder="1234 5678 9012 3456" />
              </div>
              <div class="space-y-2">
                <Label for="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" />
              </div>
            </div>
            <p class="text-xs text-muted-foreground">Enter your 16-digit number.</p>
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <Label>Month</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="MM" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem v-for="m in 12" :key="m" :value="m.toString()">
                      {{ m.toString().padStart(2, '0') }}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div class="space-y-2">
                <Label>Year</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="YYYY" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem v-for="y in 10" :key="y" :value="(2024+y).toString()">
                      {{ 2024 + y }}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator class="my-6" />

            <div class="space-y-4">
              <h3 class="text-sm font-medium">Billing Address</h3>
              <p class="text-xs text-muted-foreground">The billing address associated with your payment method</p>
              <div class="flex items-center space-x-2">
                <Checkbox id="shipping" checked />
                <Label for="shipping" class="text-sm font-normal">Same as shipping address</Label>
              </div>
            </div>

            <div class="space-y-2 pt-4">
              <Label>Comments</Label>
              <Textarea placeholder="Add any additional comments" />
            </div>
          </CardContent>
          <CardFooter class="flex justify-between">
            <Button variant="default">Submit</Button>
            <Button variant="outline">Cancel</Button>
          </CardFooter>
        </Card>
      </div>

      <!-- Columna 2: Team & Search -->
      <div class="space-y-6">
        <Card class="flex flex-col items-center justify-center py-10 text-center space-y-4">
          <div class="flex -space-x-2">
            <Avatar class="border-2 border-background w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar class="border-2 border-background w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar class="border-2 border-background w-12 h-12">
              <AvatarFallback >
                <Plus class="w-6 h-6" />
              </AvatarFallback>
            </Avatar>
          </div>
          <div class="space-y-1">
            <CardTitle class="text-lg">No Team Members</CardTitle>
            <CardDescription class="px-6">Invite your team to collaborate on this project.</CardDescription>
          </div>
          <Button size="sm">
            <Plus class="w-4 h-4 mr-2" /> Invite Members
          </Button>
        </Card>

        <div class="flex gap-2 flex-wrap justify-center">
          <Badge variant="default" class="rounded-full">
            <Loader2 class="w-3 h-3 animate-spin" /> Syncing
          </Badge>
          <Badge variant="secondary" class="rounded-full">
            <Loader2 class="w-3 h-3" /> Updating
          </Badge>
          <Badge variant="outline" class="rounded-full">
            <Loader2 class="w-3 h-3" /> Loading
          </Badge>
        </div>

        <div class="relative">
          <Button variant="outline" size="icon" class="absolute left-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full">
            <Plus class="h-4 w-4" />
          </Button>
          <Input placeholder="Send a message..." class="pl-11 pr-10" />
          <Mic class="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>

        <div class="space-y-4">
          <div class="flex justify-between items-end">
            <div class="space-y-1">
              <h4 class="text-sm font-medium">Price Range</h4>
              <p class="text-xs text-muted-foreground">Set your budget range ($ 200 - 800).</p>
            </div>
          </div>
          <Slider v-model="priceRange" :max="1000" :step="10" />
        </div>

        <div class="relative">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." class="pl-9 pr-20" />
          <span class="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">12 results</span>
        </div>

        <div class="relative">
          <Input placeholder="https://example.com" class="pr-10" />
          <Info class="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>

        <Card class="p-4 space-y-4">
          <p class="text-sm text-muted-foreground">Ask, Search or Chat...</p>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <Button variant="outline" size="icon" class="h-8 w-8 rounded-full">
                <Plus class="h-4 w-4" />
              </Button>
              <Badge variant="outline" class="font-normal rounded-full">Auto</Badge>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-xs text-muted-foreground">52% used</span>
              <Button size="icon" class="h-8 w-8 rounded-full bg-muted text-muted-foreground hover:bg-muted">
                <ArrowUp class="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        <div class="relative">
          <AtSign class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="shadcn" class="pl-9 pr-10" />
          <Check class="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 bg-primary text-white rounded-full p-0.5" />
        </div>
      </div>

      <!-- Columna 3: Security & Settings -->
      <div class="space-y-6">
        <div class="relative">
          <Info class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="https://" class="pl-9 pr-10" />
          <Search class="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>

        <Card>
          <CardContent class="p-4 flex items-center justify-between">
            <div class="space-y-1">
              <h4 class="text-sm font-medium">Two-factor authentication</h4>
              <p class="text-xs text-muted-foreground">Verify via email or phone number.</p>
            </div>
            <Button size="sm">Enable</Button>
          </CardContent>
        </Card>

        <Alert class="cursor-pointer hover:bg-muted/50 transition-colors">
          <Check class="h-4 w-4" />
          <AlertTitle class="text-sm font-medium">Your profile has been verified.</AlertTitle>
          <ChevronRight class="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </Alert>

        <div class="flex items-center gap-4">
          <Separator class="flex-1" />
          <span class="text-xs text-muted-foreground font-medium uppercase tracking-wider">Appearance Settings</span>
          <Separator class="flex-1" />
        </div>

        <div class="space-y-4">
          <div class="space-y-1">
            <h4 class="text-sm font-medium">Compute Environment</h4>
            <p class="text-xs text-muted-foreground">Select the compute environment for your cluster.</p>
          </div>

          <RadioGroup default-value="kubernetes" class="space-y-3">
            <Label
              for="kubernetes"
              class="flex items-start gap-4 p-4 rounded-lg border cursor-pointer hover:bg-muted/50 [&:has(:checked)]:border-black [&:has(:checked)]:bg-muted/50 transition-all"
            >
              <RadioGroupItem value="kubernetes" id="kubernetes" class="sr-only" />
              <div class="flex flex-col gap-1 flex-1">
                <div class="flex items-center justify-between">
                  <span class="font-medium text-sm">Kubernetes</span>
                  <div class="w-2 h-2 rounded-full bg-black"></div>
                </div>
                <span class="text-xs text-muted-foreground leading-relaxed">Run GPU workloads on a K8s configured cluster. This is the default.</span>
              </div>
            </Label>

            <Label
              for="vm"
              class="flex items-start gap-4 p-4 rounded-lg border cursor-pointer hover:bg-muted/50 transition-all opacity-60"
            >
              <RadioGroupItem value="vm" id="vm" class="sr-only" />
              <div class="flex flex-col gap-1 flex-1">
                <div class="flex items-center justify-between">
                  <span class="font-medium text-sm">Virtual Machine</span>
                  <div class="w-3 h-3 rounded-full border"></div>
                </div>
                <span class="text-xs text-muted-foreground leading-relaxed">Access a VM configured cluster to run workloads. (Coming soon)</span>
              </div>
            </Label>
          </RadioGroup>
        </div>

        <div class="space-y-4">
          <div class="flex justify-between items-center">
            <div class="space-y-1">
              <h4 class="text-sm font-medium">Number of GPUs</h4>
              <p class="text-xs text-muted-foreground">You can add more later.</p>
            </div>
            <div class="flex items-center border rounded-md">
              <span class="px-4 py-1 text-sm font-medium">{{ gpuCount }}</span>
              <div class="flex border-l divide-x">
                <Button variant="ghost" size="icon" class="h-8 w-8 rounded-none" @click="gpuCount > 0 && gpuCount--">
                  <span class="text-lg">−</span>
                </Button>
                <Button variant="ghost" size="icon" class="h-8 w-8 rounded-none border-l" @click="gpuCount++">
                  <span class="text-lg">+</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="space-y-1">
            <h4 class="text-sm font-medium">Wallpaper Tinting</h4>
            <p class="text-xs text-muted-foreground">Allow the wallpaper to be tinted.</p>
          </div>
          <Switch checked />
        </div>
      </div>

      <!-- Columna 4: Misc -->
      <div class="space-y-6">
        <Card class="p-4 space-y-4">
          <div class="flex items-center gap-2 text-muted-foreground">
            <AtSign class="h-4 w-4" />
            <span class="text-sm">Add context</span>
          </div>
          <p class="text-sm text-muted-foreground">Ask, search, or make anything...</p>
          <div class="flex items-center justify-between pt-4">
            <div class="flex items-center gap-2">
              <Clock class="h-4 w-4 text-muted-foreground" />
              <Badge variant="outline" class="font-normal rounded-full">Auto</Badge>
              <Globe class="h-4 w-4 text-muted-foreground ml-2" />
              <span class="text-xs text-muted-foreground">All Sources</span>
            </div>
            <Button size="icon" class="h-8 w-8 rounded-full">
              <ArrowUp class="h-4 w-4" />
            </Button>
          </div>
        </Card>

        <div class="flex items-center gap-2">
          <Button variant="outline" size="icon" class="h-9 w-9">
            <ChevronLeft class="h-4 w-4" />
          </Button>
          <Button variant="outline" class="text-xs font-normal h-9">Archive</Button>
          <Button variant="outline" class="text-xs font-normal h-9">Report</Button>
          <Button variant="outline" class="text-xs font-normal h-9">Snooze</Button>
          <Button variant="outline" size="icon" class="h-9 w-9">
            <MoreHorizontal class="h-4 w-4" />
          </Button>
        </div>

        <Card class="p-4 flex items-center space-x-3">
          <Checkbox id="terms" checked />
          <Label for="terms" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            I agree to the terms and conditions
          </Label>
        </Card>

        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1">
            <Button variant="outline" size="icon" class="h-8 w-8 text-xs font-normal bg-muted/50 border-none">1</Button>
            <Button variant="ghost" size="icon" class="h-8 w-8 text-xs font-normal">2</Button>
            <Button variant="ghost" size="icon" class="h-8 w-8 text-xs font-normal">3</Button>
            <Button variant="ghost" size="icon" class="h-8 w-8">
              <ChevronLeft class="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" class="h-8 w-8">
              <ChevronRight class="h-4 w-4" />
            </Button>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" class="h-9 gap-2">
                <Badge variant="outline" class="h-5 w-5 p-0 flex items-center justify-center rounded-sm">
                  <span class="text-[10px]">🤖</span>
                </Badge>
                Copilot
                <ChevronDown class="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Option 1</DropdownMenuItem>
              <DropdownMenuItem>Option 2</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div class="space-y-4">
          <div class="space-y-1">
            <h4 class="text-sm font-medium">How did you hear about us?</h4>
            <p class="text-xs text-muted-foreground">Select the option that best describes how you...</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <Badge variant="outline" class="px-3 py-1.5 flex items-center gap-2 rounded-full font-normal border-black bg-muted/50">
              <Check class="h-3 w-3" /> Social Media
            </Badge>
            <Badge variant="outline" class="px-3 py-1.5 rounded-full font-normal">Search Engine</Badge>
            <Badge variant="outline" class="px-3 py-1.5 rounded-full font-normal">Referral</Badge>
            <Badge variant="outline" class="px-3 py-1.5 rounded-full font-normal">Other</Badge>
          </div>
        </div>

        <Card class="flex flex-col items-center justify-center py-10 space-y-6 border-dashed">
          <div class="relative">
            <Loader2 class="h-8 w-8 animate-spin text-muted-foreground opacity-40" />
          </div>
          <div class="text-center space-y-2">
            <h4 class="text-lg font-semibold tracking-tight">Processing your request</h4>
            <p class="text-sm text-muted-foreground px-10">Please wait while we process your request. Do not refresh the page.</p>
          </div>
          <Button variant="outline" size="sm" class="h-9">Cancel</Button>
        </Card>
      </div>
    </main>
  </section>
</template>

