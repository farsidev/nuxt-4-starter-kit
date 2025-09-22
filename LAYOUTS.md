# Nuxt 4 Layout System - Best Practices

This document explains the layout system implementation in this Nuxt 4 starter kit, following best practices for scalable and maintainable applications.

## 📁 Directory Structure

```
app/
├── app.vue                 # Root component with NuxtLayout
├── layouts/               # Layout components
│   ├── default.vue        # Default layout (header + footer)
│   ├── auth.vue          # Authentication layout (centered)
│   ├── admin.vue         # Admin panel layout (sidebar)
│   └── minimal.vue       # Minimal layout (404, maintenance)
└── pages/                # Page components
    ├── index.vue         # Home page (default layout)
    ├── about.vue         # About page (default layout)
    ├── auth/            # Auth pages (auth layout)
    │   ├── login.vue
    │   └── register.vue
    ├── admin/           # Admin pages (admin layout)
    │   ├── index.vue
    │   └── users.vue
    └── [...slug].vue    # 404 page (minimal layout)
```

## 🎨 Layout Types

### 1. Default Layout (`default.vue`)

- **Purpose**: Main application layout with header and footer
- **Usage**: Home page, about page, and most public pages
- **Features**:
  - Navigation header with active states
  - Main content area
  - Footer with links
  - Responsive design

### 2. Auth Layout (`auth.vue`)

- **Purpose**: Centered layout for authentication flows
- **Usage**: Login, register, forgot password pages
- **Features**:
  - Centered content with max-width
  - Dynamic title based on route
  - Clean, focused design
  - Back to home link

### 3. Admin Layout (`admin.vue`)

- **Purpose**: Administrative interface with sidebar navigation
- **Usage**: Admin dashboard, user management, settings
- **Features**:
  - Sidebar navigation with active states
  - Admin-specific header
  - Full-width main content area
  - SEO meta with noindex

### 4. Minimal Layout (`minimal.vue`)

- **Purpose**: Clean, centered layout for special pages
- **Usage**: 404 pages, maintenance pages, error pages
- **Features**:
  - Centered content
  - No navigation elements
  - Clean, distraction-free design

## 🔧 Implementation Details

### App.vue Structure

```vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

### Page Layout Assignment

```vue
<script setup lang="ts">
// Assign layout to page
definePageMeta({
  layout: "default", // or 'auth', 'admin', 'minimal'
});
</script>
```

### Layout Component Structure

```vue
<template>
  <div class="layout-container">
    <!-- Layout-specific elements -->
    <slot />
    <!-- Page content goes here -->
  </div>
</template>
```

## 🚀 Best Practices

### 1. Layout Naming

- Use descriptive names: `default`, `auth`, `admin`, `minimal`
- Keep names short and consistent
- Use kebab-case for multi-word layouts

### 2. Layout Responsibilities

- **Layouts**: Handle structure, navigation, common UI elements
- **Pages**: Focus on page-specific content only
- **Components**: Reusable UI elements

### 3. Navigation Management

- Include navigation in layouts where appropriate
- Use active state detection: `$route.path === '/path'`
- Provide consistent navigation across related pages

### 4. SEO Considerations

- Set appropriate meta tags in layouts
- Use `noindex, nofollow` for admin pages
- Include proper titles and descriptions

### 5. Responsive Design

- Make layouts responsive from the start
- Use Tailwind CSS classes for consistency
- Test on different screen sizes

## 📱 Usage Examples

### Creating a New Layout

1. Create file in `app/layouts/`
2. Define the layout structure with `<slot />`
3. Add navigation and common elements
4. Set appropriate meta tags

### Assigning Layouts to Pages

```vue
<script setup lang="ts">
// Method 1: Using definePageMeta
definePageMeta({
  layout: "auth",
});

// Method 2: Dynamic layout (if needed)
const layout = "admin";
</script>
```

### Layout-Specific Features

- **Default**: Full navigation, footer
- **Auth**: Centered form, minimal navigation
- **Admin**: Sidebar, admin-specific header
- **Minimal**: No navigation, centered content

## 🔄 Layout Switching

Nuxt automatically handles layout switching when navigating between pages. The layout system provides:

- **Automatic detection**: Based on `definePageMeta`
- **Smooth transitions**: Between different layouts
- **State preservation**: Layout state maintained during navigation
- **SEO optimization**: Proper meta tags per layout

## 🎯 Benefits

1. **Consistency**: Uniform structure across similar pages
2. **Maintainability**: Centralized layout logic
3. **Scalability**: Easy to add new layouts and pages
4. **Performance**: Efficient layout switching
5. **Developer Experience**: Clear separation of concerns

## 🛠️ Customization

### Adding New Layouts

1. Create new layout file in `app/layouts/`
2. Define the layout structure
3. Add to pages using `definePageMeta`
4. Update navigation if needed

### Modifying Existing Layouts

- Update layout files directly
- Changes apply to all pages using that layout
- Test across all affected pages

### Layout-Specific Styling

- Use layout-specific CSS classes
- Leverage Tailwind CSS for consistency
- Consider dark mode and responsive design

This layout system provides a solid foundation for building scalable Nuxt 4 applications with proper separation of concerns and maintainable code structure.
