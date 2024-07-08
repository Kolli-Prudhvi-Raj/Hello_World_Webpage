let count=0;
c_tag=document.getElementById('app');
c_tag.innerHTML=`Click count = ${count}`;
c_tag.addEventListener(`click`,()=>{count++;
                                    c_tag.innerHTML=`Clicked: Current Click Count = ${count}`;
                                   })
