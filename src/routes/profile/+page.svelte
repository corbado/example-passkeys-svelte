{#if user}
    <h1>Profile Page</h1>
    <p>
        User-ID: {user.userID}
        <br />
        Email: {user.email}
    </p>
    <button on:click={handleLogout}>Logout</button>
{:else}
    <p>You're not logged in.</p>
    <p>Please go back to <a on:click={redirectToHome}>home</a> to log in.</p>
{/if}

<script>
    import {PUBLIC_CORBADO_PROJECT_ID} from '$env/static/public';
    import Corbado from '@corbado/webcomponent';
    import '@corbado/webcomponent/pkg/auth_cui.css';
    import { onMount } from 'svelte';

    let user = null;
    const session = new Corbado.Session(PUBLIC_CORBADO_PROJECT_ID);

    const handleLogout = async () => {
        try {
            await session.logout();
            window.location.href = '/';
        } catch (err) {
            console.log(err);
        }
    };

    const redirectToHome = () => {
        window.location.href = '/';
    };

    onMount(() => {
        session.refresh(u => {
            user = u;
        });
    });
</script>