<!-- OBSERVATION -->

the reason why the cleanup function only executes and not re-run the useEffect 
is because in my case I did not use the any dependency in the array, my array 
which means the useEffect only executes once, when its component mounts
so a component is mounted and immediately unmounted then 
the cleanup function executes but then the useEffect doesnt 

there are cases where the dependecies change and we need to cleanup prev state



# Hiding tab bar in specific screens
link = https://reactnavigation.org/docs/hiding-tabbar-in-screens/