<section class="grid grid--row">
	<section class="grid grid--column">
		<CellCell {...cellcell1}/>
		<CellCell {...cellcell2}/>
		<CellCell {...cellcell3}/>
		<CellCell {...cellcell1}/>
		<CellCell {...cellcell2}/>
		<CellCell {...cellcell3}/>
		<CellCell {...cellcell1}/>
		<CellCell {...cellcell2}/>
		<CellCell {...cellcell3}/>
	</section>
	<section class="grid grid--column">
		<CellCell {...cellcell1}/>
		<CellCell {...cellcell2}/>
		<CellCell {...cellcell3}/>
		<CellCell {...cellcell1}/>
	</section>
	<section class="grid grid--column">
		<CellCell {...cellcell1}/>
		<CellCell {...cellcell2}/>
	</section>
	<section class="grid grid--column">
		<CellCell {...cellcell1}/>
	</section>
</section>

<script>
import CellCell from "../components/blocks/Cell/CellCell.svelte";

let cellcell1 = {
	label1: 'label1',
	score1: '1',
	label2: 'label2',
	score2: '2',
}
let cellcell2 = {
	score1: '4',
	score2: '1',
}
let cellcell3 = {

}
</script>

<style>
.grid {
	display: grid;
	grid-gap: 10px;
}
.grid--row {
	display: grid;
    grid-template-rows: 1fr;
    grid-auto-flow: column;
    align-items: center;
	grid-gap: 20px;
}
.grid--column {
	grid-template-rows: 1fr;
	grid-template-columns: 1fr;
}
</style>