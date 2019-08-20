<div class="cell__container" style="background-color: {color}">
    <div class="cell__label">
        { label }
    </div>
    <div class="cell__score">
        { score }
    </div>
</div>

<script>
    export let label = 'label';
    export let score = '0';
    export let color = 'grey';
</script>

<style>
.cell__container {
    display: flex;
    width: 100%;
}
.cell__label {
    display: flex;
    justify-content: center;
    flex: 1 1 100%;    
}
.cell__score {
    display: flex;
    justify-content: center;
    flex: 1 1 40px;
}
</style>

