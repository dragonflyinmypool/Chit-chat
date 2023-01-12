<script>
	import QGroup from '$lib/qgroup.svelte';
	import Qgroup from './qgroup.svelte';
	import { formData } from '../stores.js';
</script>

<div class="form bubleBox">
	{#each $formData as data, i}
		<Qgroup data={$formData[i]} />
	{/each}
</div>

<style>
	.form {
		background-color: var(--cultured);
		background-color: var(--medium-aquamarine);
		display: grid;
		gap: 15px;
		color: #174c50ff;
		font-weight: bold;
	}
</style>
