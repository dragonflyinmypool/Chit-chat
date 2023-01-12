<script>
	import Header from '$lib/header.svelte';
	import Form from '$lib/form.svelte';
	import Results from '$lib/results.svelte';
</script>

<main>
	<Header />
	<!-- Form -->
	<Form />
	<!-- Submit -->
	<div class="submit bubleBox">
		<div>SUBMIT</div>
	</div>
	<!-- Results -->
	<!-- <Results /> -->
</main>

<style>
	.submit {
		background-color: var(--medium-aquamarine);
		color: var(--midnight-green-eagle-green);
		font-weight: bold;
		font-family: 'Heebo', sans-serif;
		border-radius: 20px;
		text-align: center;
		width: 100px;
	}
</style>
