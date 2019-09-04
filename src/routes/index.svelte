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

let TOUR = {
	info: {
		title: "MiG Party",
		format: 'Single Doubble Elemination',
		places: {
			1: 'MiGScout',
			2: 'MiGSup',
			3: 'MiGSilver',
		},
		registered: [
			{
				id: 0,
				name: 'MiGScout',
				checkin: true
			},
			{
                id: 1,
                name: 'MiGSilver',
                checkin: false
            },
            {
                id: 2,
                name: 'MiGSup',
                checkin: false
            },
		],
	},
	rounds: [
		{
			round: 1,
			scores: [
                {
                    fightId: 0,
                    score: [
                        { player: 'MiGScout', wins: 2},
                        { player: 'MiGSilver', wins: 1},
                    ],
                },
                {
                    fightId: 1,
                    score: [
                        { player: 'MiGSup', wins: 2},
                        { player: 'Empty', wins: 0},
                    ],
                }
			]
		},
        {
            round: 2,
            scores: [
                {
                    fightId: 0,
                    score: [
                        { player: 'MiGScout', wins: 2},
                        { player: 'MiGSup', wins: 1},
                    ],
                },
            ]
        },
	]
}

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
	display: flex;
	flex-direction: column;
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