// If some function is not available in any browser it creates that function for the user ?

if (!Array.prototype.fill) {
    // Fallback - Polyfill - Its like a backup function
    Array.prototype.fill = function() {

    }
}