
file="users.txt"
echo "Sign up or Login"
read but
if [ "$but" = "Sign up" ];then
    echo "Enter Username:"
    read username
    early=$(grep "$username" $file)
    if [ -n "$early" ];then
     echo "already exists"
     exit
    else 
     continue
    fi
    echo "Enter Password:"
    read password
    echo "Enter your role:"
    read role
   echo -e "$username $password $role\n" >> users.txt
elif [ "$but" = "Login" ];then
    echo "Enter Username:"
    read username
    echo "Enter password:"
    read password
    matched=$(grep "^$username $password " $file);
    if [ -n "$matched" ];then
    echo "You are logged in as :" 
    echo "$matched" | cut -d' ' -f3
    else
    echo "User Not found"
    fi
else
    echo "Invalid"
fi


