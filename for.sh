

echo "Enter the numbers:"
read -a nums 
for num in "${nums[@]}"; do
    if ! [[ "$num" =~ ^-?[0-9]+$ ]]; then
        echo "$num is not valid"
        continue
    fi

    if (( num % 2 == 0 )); then
        echo "$num is even"
    else
        echo "$num is odd"
    fi
done

