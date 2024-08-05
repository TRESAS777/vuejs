/// <reference types="vite/client" />
// Declare module for vue files
declare module '*.vue' {
    // import DefineComponent from vue
    import { DefineComponent } from "vue";
    // Define component as DefineComponent
    const component: DefineComponent<{}, {}, any>;
    // Export default component
    export default component;
}