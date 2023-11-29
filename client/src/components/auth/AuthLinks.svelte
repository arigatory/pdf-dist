<script lang="ts">
	import { auth } from '$s/auth';
</script>

{#if $auth.user}
	<a
		class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
		href="/auth/signout">Выйти</a
	>
{:else}
	<a
		class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
		href="/auth/signin">Войти</a
	>
	<a
		class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
		href="/auth/signup">Зарегистрироваться</a
	>
{/if}
