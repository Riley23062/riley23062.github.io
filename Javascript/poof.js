var counter = 0;
$gameSwitches.setValue(5, true);
while(counter < 5){
  console.log(counter);
  if ($gameSwitches.value(21 + counter) == true) {
    console.log("Lever Is On")
  }
  else {
$gameSwitches.setValue(5, true);
    console.log("Lever Is Off")
  }
  counter = counter + 1;
}
