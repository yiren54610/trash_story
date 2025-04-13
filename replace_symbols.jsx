// Replace red dots with symbol in Illustrator
var doc = app.activeDocument;
var redRGB = [219, 30, 42]; // Adjust if your red is different
var symbolName = "trash_can"; // Change to match your symbol's name

var targetSymbol = null;
for (var i = 0; i < doc.symbols.length; i++) {
  if (doc.symbols[i].name == symbolName) {
    targetSymbol = doc.symbols[i];
    break;
  }
}

if (!targetSymbol) {
    alert("Symbol not found: " + symbolName);
  } else {
    var count = 0;
    for (var i = doc.pageItems.length - 1; i >= 0; i--) {
      var item = doc.pageItems[i];
  
      // Skip items on locked layers
      if (item.layer.locked) continue;
  
      // Only process path items, not guides or clipping masks
      if (item.typename === "PathItem" && !item.guides && !item.clipping) {
        var fillColor = item.fillColor;
        if (fillColor.typename === "RGBColor") {
          if (fillColor.red === redRGB[0] && fillColor.green === redRGB[1] && fillColor.blue === redRGB[2]) {
            // Record position
            var x = item.left;
            var y = item.top;
  
            // Delete original red dot
            item.remove();
  
            // Place symbol
            var symbolItem = doc.symbolItems.add(targetSymbol);
            symbolItem.left = x;
            symbolItem.top = y;
  
            count++;
          }
        }
      }
    }
  
    alert("Replaced " + count + " red dots with symbol: " + symbolName);
  }