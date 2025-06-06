n1=2
n2=19
sum=$((n1 + n2))
name="adya"

if [ $sum -lt 5 ]; then
  echo "hello $name"
else
  echo "sum: $sum"
fi
