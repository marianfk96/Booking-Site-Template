<template>
    <h2>ΑΝΑΖΗΤΗΣΗ</h2>
    <div class="img-container">
        <button>ΕΜΦΑΝΙΣΗ ΑΠΟΤΕΛΕΣΜΑΤΩΝ ΣΤΟ ΧΑΡΤΗ</button>
    </div>
    <div class="filters">
        <input type="text" class="hotel-search" placeholder="Όνομα ξενοδοχείου">
        <h2>Εύρος απόστασης(m)</h2>
        <div class="slider-container">
            <div class="slider-track"></div>
            <input type="range" id="distance-1" min="0" max="100" value="20">
            <input type="range" id="distance-2" min="0" max="100" value="80">
        </div>
        <h2>Αστέρια</h2>
        <ul>
            <li><input type="checkbox">Uncategorized</li>
            <li><input type="checkbox">Hotel</li>
            <li><input type="checkbox">Όλοι οι τύποι</li>
        </ul>
        <button>Εφαρμογή φίλτρων</button>
    </div>
</template>

<script>
    
</script>

<style scoped>

</style>