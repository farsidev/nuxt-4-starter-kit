<template>
  <div>
    <div class="mb-8">
      <h1 class="mb-2 text-3xl font-bold">User Management</h1>
      <p class="text-muted-foreground">
        Manage user accounts, permissions, and access levels.
      </p>
    </div>

    <!-- User Actions -->
    <div class="flex justify-between items-center mb-6">
      <div class="flex gap-4 items-center">
        <Button>
          <Icon name="mdi:account-plus" class="mr-2" />
          Add User
        </Button>
        <Button variant="outline">
          <Icon name="mdi:download" class="mr-2" />
          Export
        </Button>
      </div>
      <div class="flex gap-2 items-center">
        <input
          type="text"
          placeholder="Search users..."
          class="px-3 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Button variant="outline" size="sm">
          <Icon name="mdi:magnify" />
        </Button>
      </div>
    </div>

    <!-- Users Table -->
    <div class="overflow-hidden rounded-lg border bg-card border-border">
      <table class="w-full">
        <thead class="bg-muted/50">
          <tr>
            <th
              class="px-6 py-3 text-sm font-medium text-left text-muted-foreground"
            >
              User
            </th>
            <th
              class="px-6 py-3 text-sm font-medium text-left text-muted-foreground"
            >
              Email
            </th>
            <th
              class="px-6 py-3 text-sm font-medium text-left text-muted-foreground"
            >
              Role
            </th>
            <th
              class="px-6 py-3 text-sm font-medium text-left text-muted-foreground"
            >
              Status
            </th>
            <th
              class="px-6 py-3 text-sm font-medium text-left text-muted-foreground"
            >
              Last Login
            </th>
            <th
              class="px-6 py-3 text-sm font-medium text-left text-muted-foreground"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          <tr v-for="user in users" :key="user.id" class="hover:bg-muted/25">
            <td class="px-6 py-4">
              <div class="flex gap-3 items-center">
                <div
                  class="flex justify-center items-center w-8 h-8 rounded-full bg-primary/10"
                >
                  <Icon name="mdi:account" size="16" class="text-primary" />
                </div>
                <div>
                  <p class="font-medium">{{ user.name }}</p>
                  <p class="text-sm text-muted-foreground">ID: {{ user.id }}</p>
                </div>
              </div>
            </td>
            <td class="px-6 py-4">
              <p class="text-sm">{{ user.email }}</p>
            </td>
            <td class="px-6 py-4">
              <Badge
                :variant="user.role === 'admin' ? 'destructive' : 'secondary'"
              >
                {{ user.role }}
              </Badge>
            </td>
            <td class="px-6 py-4">
              <Badge
                :variant="user.status === 'active' ? 'success' : 'secondary'"
              >
                {{ user.status }}
              </Badge>
            </td>
            <td class="px-6 py-4">
              <p class="text-sm text-muted-foreground">{{ user.lastLogin }}</p>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2 items-center">
                <Button variant="ghost" size="sm">
                  <Icon name="mdi:pencil" size="16" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="mdi:eye" size="16" />
                </Button>
                <Button variant="ghost" size="sm" class="text-destructive">
                  <Icon name="mdi:delete" size="16" />
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="flex justify-between items-center mt-6">
      <p class="text-sm text-muted-foreground">Showing 1-10 of 1,234 users</p>
      <div class="flex gap-2 items-center">
        <Button variant="outline" size="sm">Previous</Button>
        <Button variant="outline" size="sm">1</Button>
        <Button variant="outline" size="sm">2</Button>
        <Button variant="outline" size="sm">3</Button>
        <Button variant="outline" size="sm">Next</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Admin users page using admin layout
definePageMeta({
  layout: "admin",
});

// Mock user data
const users = ref([
  {
    id: "001",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
    status: "active",
    lastLogin: "2 hours ago",
  },
  {
    id: "002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "user",
    status: "active",
    lastLogin: "1 day ago",
  },
  {
    id: "003",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    role: "user",
    status: "inactive",
    lastLogin: "1 week ago",
  },
]);

// SEO meta
useSeoMeta({
  title: "User Management - Admin Panel",
  description: "Manage user accounts and permissions",
});
</script>
