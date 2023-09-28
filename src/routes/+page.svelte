<script>
    import {PUBLIC_CORBADO_PROJECT_ID} from '$env/static/public';

    import '@corbado/webcomponent/pkg/auth_cui.css'
    import '@corbado/webcomponent'
</script>
<corbado-auth
        project-id={PUBLIC_CORBADO_PROJECT_ID}
        conditional="yes"
>
    <input
            name="username"
            id="corbado-username"
            required
            autocomplete="webauthn"
    />
</corbado-auth>