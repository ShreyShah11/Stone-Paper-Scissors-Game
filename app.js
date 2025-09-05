let comp_score=0,user_score=0;
let comp=document.querySelector("#comp-score");
let user=document.querySelector("#user-score");
let msg = document.getElementById("msg");

let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissors=document.querySelector("#scissors");

let arr=["paper", "scissor", "rock"];
//rock->2,scissor->1,paper->0

const result=(type)=>{
    let N = 3;
    let r = Math.floor(Math.random() * N);
    let res,won;//true->computer,false-user

    if(type==2 && r==0)
    {
        won=true;
        comp_score++;
        res="computer";
    }
    else if(type==0 && r==2)
    {
        won=true;
        user_score++;
        res="user";
    }
    else
    {
        if(type==r) won=false;
        else if(type>r)
        {
            won=true;
            res="user";
            user_score++;
        }
        else
        {
            won=true;
            res="computer";
            comp_score++;
        }
    }

    if(won)
    {
        if(res=="user")
        {
            msg.innerHTML=`You Won! Your ${arr[type]} beats ${arr[r]}`;
            msg.style.backgroundColor="green";
        }
        else
        {
            msg.innerHTML=`You Lost! Computer's ${arr[type]} beats ${arr[r]}`;
            msg.style.backgroundColor="red";
        }
    }
    else
    {
        msg.innerHTML=`Game Draw! Both chooses ${arr[type]}`;
        msg.style.backgroundColor="#081b31";
    }

    comp.innerHTML=`${comp_score}`;
    user.innerHTML=`${user_score}`;
};

paper.addEventListener("click", () => result(0));
scissors.addEventListener("click", () => result(1));
rock.addEventListener("click", () => result(2));
