
declare -a present
declare -a absent

for ((i = 1; i <= 6; i++)); 
    do
      echo -n "Enter name of student $i: "
    read name
      echo -n "Is $name present? (yes/no): "
    read status
    
    if [[ "$status" == "yes" || "$status" == "present" ]]; then
        present+=("$name")
    else
        absent+=("$name")
    fi
done
echo "Present students:"
for p in "${present[@]}"; do
    echo "$p"
done
echo "Absent students:"
for a in "${absent[@]}"; do
    echo "$a"
done
