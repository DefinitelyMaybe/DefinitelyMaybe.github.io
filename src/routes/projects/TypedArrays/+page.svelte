<script>
	// https://emojipedia.org/search/?q=fruit
	let userArray = ['🥝', '🍓', '🍍', '🍋', '🍑', '🍌', '🥑'];
	let typedArray;
</script>

<svelte:head>
	<title>Typed Arrays and You</title>
</svelte:head>

<div class="flex grow flex-col bg-base-300">
	<div>Numbers</div>
	<div>Arrays</div>
  <div class="columns-2">
    <div>The Buffer</div>
    <div>The View</div>
  </div>
	<select class="input select">
    <option default value="0">Uint8Array</option>
    <option value="1">Uint16Array</option>
    <option value="2">Uint32Array</option>
    <option value="3">Uint64Array</option>
  </select>
	<div>[{userArray}]</div>
  <div>How to index 2 diminsional arrays: index * itemSize + offset</div>
</div>
