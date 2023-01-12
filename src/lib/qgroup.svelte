<script>
	export let data;
</script>

<div class="qGroup">
	<div class="question">{data.question.toUpperCase()}</div>
	<!-- Create a div for each option  -->
	<div class="options">
		{#each data.options as option, i}
			<!-- add active class if data.selected is i, change active class based on clicks -->

			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="option {data.seletected === i ? 'active' : ''}" on:click={(data.seletected = i)}>
				{option}
			</div>
		{/each}
	</div>
</div>

<style>
	.qGroup {
		display: grid;
		grid-template-columns: 100px auto;
		align-items: center;
		gap: 10px;
	}

	.question {
		width: 110px;
	}
	.options {
		display: flex;
		flex-wrap: wrap;
	}

	.option {
		border-radius: 3px;
		padding: 5px;
	}

	.active {
		background-color: var(--cultured);
	}
</style>
