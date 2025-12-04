# RELEASE NOTES

## Release 1.0.0

- Add GlobalNav (container)
- Add Navbar (static)
- Add UserProfile (dynamic status)
- Add FormNavbar (Layout)
- Add UserSettings (Container)
- Add Status (with dropdown)

## Release 2.0.0

### **Added**

- Introduced **dynamic language switching** with updated `LanguageContext` including setter functions, improved types, and memoized context values.
- Added **ThemeContext** and **ThemeProvider** with support for **light**, **dark**, and **auto** modes.
- Implemented **theme selection UI** in the Views page with radio options for all modes.
- Wrapped application with **ThemeProvider** to provide global theme access.
- Added **new i18n keys** for theme-related labels in both English and Hindi.
- Created **CSS design tokens** for light/dark palettes (`background`, `text`, `navigation`, `tab`).

### **Changed**

- Updated Views layout title to use the new `USER_VIEW_SETTINGS` key.
- Applied **UserSettingLayout** to Status for consistent layout across settings pages.
- Updated language constants and integrated language context into multiple components (`UserSettings`, `FormNav`, `Navbar`).
- Improved component memoization (`UserProfile`) to enhance performance.

### **Improved**

- Synchronized theme preference with **localStorage** and **system-level theme detection** using `matchMedia`.
- Ensured consistent dark mode behavior by toggling the `dark` class on the root element dynamically.

### **Removed**

- Removed title prop from the Status component and replaced it with internal label retrieval.
