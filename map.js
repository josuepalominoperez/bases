// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  //Obtaining value from apples
  document.write(fruits.get("apples")+"<br>"+"<br>");




  //Recorriendo y mostrando todos los values
  let text = "";
for (const x of fruits.values()) {
  text += x + "<br>";
}
document.write(text);