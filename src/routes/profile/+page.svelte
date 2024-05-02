<script lang="ts">
    import Corbado from "@corbado/web-js";
    import type {SessionUser} from "@corbado/types";
    import {onMount} from "svelte";

    let user: SessionUser | undefined;

    onMount(() => {
        user = Corbado.user
    })

    async function handleLogout() {
        await Corbado.logout()
        window.location.href = "/"
    }
</script>

<div>
    {#if (user)}
        <h1>
            Profile Page
        </h1>
        <p>
            User-id: {user.sub}
        </p>
        <p>
            Name: {user.name}
        </p>
        <button on:click={handleLogout}>
            Logout
        </button>
    {:else}
        <h1>
            You aren't logged in.
        </h1>
        <p>Go <a href="/">Home</a></p>
    {/if}
</div>