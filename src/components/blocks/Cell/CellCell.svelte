<div class="cellcell__container">
    <div class="cellcell__cell">
        <Cell label={label1} score={score1} color={findColorByScore(score1, score2)}/>
    </div>
    <div class="cellcell__cell">
        <Cell label={label2} score={score2} color={findColorByScore(score2, score1)}/>
    </div>
</div>

<script>
    export let label1;
    export let label2;
    export let score1;
    export let score2;
    
    import Cell from "./Cell.svelte";

    $: findColorByScore = function(selfScore, opponentScore) {
        if(selfScore > opponentScore) {
            return 'chartreuse'
        }
        if(selfScore < opponentScore) {
            return 'darksalmon'
        }
        return 'lemonchiffon'
    }
</script>

<style>
.cellcell__container {
    display: grid;
    padding: 10px 0;
    min-height: 60px;
}
.cellcell__cell {
}

</style>

