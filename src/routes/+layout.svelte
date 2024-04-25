<script lang="ts">
    import Corbado from "@corbado/web-js";
    import {onMount} from "svelte";
    const PROJECT_ID = import.meta.env.VITE_CORBADO_PROJECT_ID;

    let isInitialized = false;
    onMount(async () => {
        await Corbado.load({
            projectId: PROJECT_ID,
            darkMode: 'off'
        });
        isInitialized = true; // Set to true once Corbado is initialized
    });
</script>

<div>
    {#if isInitialized}
        <slot></slot>
    {/if}
</div>