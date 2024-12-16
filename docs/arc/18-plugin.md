# Arc Gradle Plugin

**Experimental**

The Arc Gradle Plugin transpiles Arc Agents defined in Kotlin script files to plain kotlin code that 
is then compiled into a jar file.

**Note:** The Agent scripts must reside in the folder "./agents" in the project root.

Simply add the following to your `build.gradle.kts` file to enable the plugin:

```kotlin
plugins {
    id("org.eclipse.lmos.arc.gradle.plugin") version "0.115.0"
}
```

Once the plugin is enabled, Arc Agents will be automatically built along with the rest of the project and 
are available as:

- package org.eclipse.lmos.arc.agents.gen.Agents
- package org.eclipse.lmos.arc.agents.gen.Functions



