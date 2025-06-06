
read -p "Enter a number: " n

if

for (( i=1; i<=n; i++ ))
do
    if (( i % 2 == 0 )); then
        echo "$i is even"
    else
        echo "$i is odd"
    fi
done
