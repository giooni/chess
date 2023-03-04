class figure {
    constructor(name, color){
        this.name=name
        this.color=color
      
    }

}
class pawn extends figure{
    constructor(name, color){
        super(name, color)
        

    }
   
    
   

}

class king extends figure{
    constructor(name, color){
        super(name, color)
    }
}

class queen extends figure{
    constructor(name, color){
        super(name, color)
    }
    
}

class knight extends figure{
    constructor(name, color){
        super(name, color)
    }
}

class rook extends figure{
    constructor(name, color){
        super(name, color)
    }
}


class bishop extends figure{
    constructor(name, color){
        super(name, color)
    }
}

const Pawn= new pawn("pawn", "white");
const Bpawn = new pawn("pawn", "black");
const Rook = new rook("rook", "white");
const Brook = new rook("rook", "black");
const Knight =new knight("knight", "white");
const Bknight =new knight("knight", "black");
const Bishop = new bishop("bishop", "white");
const Bbishop = new bishop("bishop", "black");
const King = new king("king", "white");
const Bking = new king("king", "black") ;
const Queen = new queen("queen", "white");
const Bqueen = new queen("queen", "black")
console.log(Pawn.name)
console.log(Rook.color)

let arr = [];
for (let i = 0; i < 8; i++) {
  arr[i] = [];

  for (let j = 0; j < 8; j++) {
    arr[i][j] = null;
  }
}
for(let k =0; k<8; k++){
    arr[6][k]=Pawn
}

for(let k =0; k<8; k++){
      arr[1][k]=Bpawn
}
arr[7][0] =Rook;
arr[7][7] =Rook;
arr[0][0] =Brook;
arr[0][7]=Brook;
arr[7][1] = Knight;
arr[7][6] = Knight;
arr[0][1] =Bknight;
arr[0][6] =Bknight
arr[7][2]= Bishop;
arr[7][5] =Bishop;
arr[0][2] = Bbishop;
arr[0][5] =Bbishop;
arr[7][4] = King;
arr[0][4] = Bking;
arr[7][3]= Queen;
arr[0][3]=Bqueen;

let wh = "74";
let bl = "04"
 
let turn = "white";
function canPawnMove(board, x1, y1, x2, y2,) {
  const piece = board[x1][y1];
  
  if (piece instanceof pawn) {
    if (piece.color === "white" && piece.color === turn ) {
      if(x2===0 && (x2 === x1 - 1 && (y1 === y2 || Math.abs(y2 - y1) === 1))&&((board[x2][y2] !== null ||board[x2][y2].color === "black")||(board[x2][y2] === null ))){
        board[x2][y2]=Queen;
        board[x1][y1]=null;
        return true
      }
      
      if (x2 === x1 - 1 && y1 === y2 && board[x2][y2] === null) {
        
        board[x2][y2] = piece;
        board[x1][y1] = null;
        
       
        return true;
      } else if (x2 === x1 - 2 && y1 === y2 && board[x2][y2] === null && x1 === 6) {
        board[x2][y2] = piece;
        board[x1][y1] = null;
        
        return true;
      } else if (x2 === x1 - 1 && Math.abs(y2 - y1) === 1 && board[x2][y2] !== null && board[x2][y2].color === "black") {
        board[x2][y2] = piece;
        board[x1][y1] = null;
        
       
        return true;
      }
      
    }
    
    else if (piece.color === "black" && piece.color === turn) {
      if(x2===7 &&(x2 === x1 + 1 && (y1 === y2 || Math.abs(y2 - y1) === 1))&&((board[x2][y2] !== null || board[x2][y2].color === "white")||(board[x2][y2] === null ))){
        board[x2][y2]=Bqueen;
        board[x1][y1]=null;
        return true
      }
      if (x2 === x1 + 1 && y1 === y2 && board[x2][y2] === null) {
        board[x2][y2] = piece;
        board[x1][y1] = null;
        
        
        
        return true;
      } else if (x2 === x1 + 2 && y1 === y2 && board[x2][y2] === null && x1 === 1) {
        board[x2][y2] = piece;
        board[x1][y1] = null;
       
        return true;
      } else if (x2 === x1 + 1 && Math.abs(y2 - y1) === 1 && board[x2][y2] !== null && board[x2][y2].color === "white") {
        
        board[x2][y2] = piece;
        board[x1][y1] = null;
        

        
        return true;
      }
    }
  }

  return false;
}
 
const boxes = document.querySelectorAll('li.box');

boxes.forEach(box =>{
    box.addEventListener("click", ()=>{
      let q =(+box.id);
      
        
      
      if(box.innerHTML){
        if((arr[Math.floor(q/10)][q%10].name ==="pawn")){
          
          let j = box.innerHTML;
          
          
          if(arr[Math.floor(q/10)][q%10].name===pawn.name){
            
            
            boxes.forEach(newbox =>{
              newbox.addEventListener("click", ()=>{
                
                let l = (+newbox.id)
                if(canPawnMove (arr, Math.floor(q/10), q%10, Math.floor(l/10), l%10)){
                  if(Math.floor(l/10)===0){
                    console.log(Math.floor(l/10))
                    newbox.innerHTML ="<div><img src='img/wq.png' alt=''></div>";
                    box.innerHTML = "";
                    j = "";
                    turn = turn === "white"? "black": "white";
                } else if(Math.floor(l/10)===7){
                    newbox.innerHTML="<div><img src='img/bq.png' alt=''></div>";
                    box.innerHTML = "";
                    j = "";
                    turn = turn === "white"? "black": "white";
                }else{
                  newbox.innerHTML=j;
                  box.innerHTML = "";
                  j =""
                  turn = turn === "white"? "black": "white"
                }
              }
            
          })
          })
          }

      }
        
       
    }

  })
})



function canRookMove(board, x1, y1, x2, y2) {
  const piece = board[x1][y1];
  const newplace = board[x2][y2];
  if (piece instanceof rook) {
    if ((piece.color === "white" || piece.color === "black") && piece.color === turn) {
      if (x1 !== x2 && y1 !== y2) {
        return false;
      } else if (x1 == x2 && (board[x2][y2] === null||newplace.color!==piece.color) ) {
        for (let i = Math.min(y1, y2) + 1; i < Math.max(y1, y2); i++) {
          if (board[x1][i] !==null) {
            return false;
          }
        }
        board[x2][y2] = board[x1][y1];
        board[x1][y1] = null;
        return true;
      } else if (y1 == y2 && (board[x2][y2] === null || newplace.color !==piece.color)) {
        for (let j = Math.min(x1, x2) + 1; j < Math.max(x1, x2); j++) {
          if (board[j][y1] !== null) {
            return false;
          }
        }
        board[x2][y2] = board[x1][y1];
        board[x1][y1] = null;
        return true;
      }
    }
  }
  return false;
}

boxes.forEach(box =>{
  box.addEventListener("click", ()=>{
    let q =(+box.id);
    
      
    
    if(box.innerHTML){
      
      if(arr[Math.floor(q/10)][q%10].name ===Rook.name){
        
        boxes.forEach(nwbox =>{
          nwbox.addEventListener("click", ()=>{
            let l = (+nwbox.id);
            if(canRookMove (arr, Math.floor(q/10), q%10, Math.floor(l/10), l%10)){
              nwbox.innerHTML=box.innerHTML;
              box.innerHTML = "";
              
              turn = turn==="white"? "black": "white"
            }

          })
        })


      
      

    }
  }

})
})



function canhorsemove(board, x1, y1, x2, y2){
  const piece = board[x1][y1];
  const newplace = board[x2][y2];
  if(piece instanceof knight){
    if(((x2 === x1+2 || x2 === x1-2) &&(y2 === y1+1 || y2===y1-1) ||(x2 === x1+1 || x2===x1-1) &&(y2 === y1+2 || y2 === y1-2) )&& (newplace ===null || piece.color !== newplace.color) && piece.color === turn){
        board[x2][y2] = board[x1][y1];
        board[x1][y1] = null;
        return true
    }

    
    }return false
}

boxes.forEach(box =>{
  box.addEventListener("click", ()=>{
    let q =(+box.id);
   
      
    
    if(box.innerHTML){
      
      if(arr[Math.floor(q/10)][q%10].name ===knight.name){
        let j= box.innerHTML;
        boxes.forEach(nwbox =>{
          nwbox.addEventListener("click", ()=>{
            let l = (+nwbox.id);
            if(canhorsemove(arr, Math.floor(q/10), q%10, Math.floor(l/10), l%10)){
              nwbox.innerHTML=j;
              box.innerHTML = "";
              j =""
              turn = turn=== "white"? "black": "white"
            }

          })
        })


      
      

    }
  }

})
})
function canbishopmove(board, x1, y1, x2, y2){
  const piece = board[x1][y1];
  const newplace = board[x2][y2];
  if(piece instanceof bishop){
    if((Math.abs(x2-x1)===Math.abs(y2-y1))&&(newplace ===null || newplace.color !== piece.color) && piece.color === turn){
      let delx = x2 > x1 ? 1 : -1;
      let dely = y2 > y1 ? 1 : -1;
      for (let i = 1; i < Math.abs(x2 - x1); i++) {
        if (board[x1 + i * delx][y1 + i * dely] !== null) {
          return false;
        }
      }
      board[x2][y2] = board[x1][y1];
      board[x1][y1] = null;
      
      return true
     
       
    }

    
    }return false
}
boxes.forEach(box =>{
  box.addEventListener("click", ()=>{
    let q =(+box.id);
    
      
    
    if(box.innerHTML){
      
      if(arr[Math.floor(q/10)][q%10].name ===bishop.name){
        let j= box.innerHTML;
        boxes.forEach(nwbox =>{
          nwbox.addEventListener("click", ()=>{
            let l = (+nwbox.id);
            if(canbishopmove(arr, Math.floor(q/10), q%10, Math.floor(l/10), l%10)){
              nwbox.innerHTML=j;
              box.innerHTML = "";
              j =""
              turn = turn === "white"? "black" : "white"
            }

          })
        })


      
      

    }
  }

})
})
function canqueenmove(board, x1, y1, x2, y2){
  const piece = board[x1][y1];
  const newplace = board[x2][y2];
  if(piece instanceof queen){
    if((Math.abs(x2-x1)===Math.abs(y2-y1))&&(newplace ===null || newplace.color !== piece.color) && piece.color === turn){
      let delx = x2 > x1 ? 1 : -1;
      let dely = y2 > y1 ? 1 : -1;
      for (let i = 1; i < Math.abs(x2 - x1); i++) {
        if (board[x1 + i * delx][y1 + i * dely] !== null) {
          return false;
        }
      }
      board[x2][y2] = board[x1][y1];
      board[x1][y1] = null;
      return true
       
    }else if(x1 !== x2 && y1 !== y2){
      return false
    }else if (x1 == x2 && (board[x2][y2] === null||newplace.color!==piece.color) &&piece.color === turn) {
      for (let i = Math.min(y1, y2) + 1; i < Math.max(y1, y2); i++) {
        if (board[x1][i] !==null) {
          return false;
        }
      }
      board[x2][y2] = board[x1][y1];
      board[x1][y1] = null;
      return true;
    } else if (y1 == y2 && (board[x2][y2] === null || newplace.color !==piece.color)&& piece.color === turn) {
      for (let j = Math.min(x1, x2) + 1; j < Math.max(x1, x2); j++) {
        if (board[j][y1] !== null) {
          return false;
        }
      }
      board[x2][y2] = board[x1][y1];
      board[x1][y1] = null;
      return true;
  


    
    }return false
}


}
boxes.forEach(box =>{
  box.addEventListener("click", ()=>{
    let q =(+box.id);
    
      
    
    if(box.innerHTML){
      
      if(arr[Math.floor(q/10)][q%10].name ===queen.name){
        let j= box.innerHTML;
        boxes.forEach(nwbox =>{
          nwbox.addEventListener("click", ()=>{
            let l = (+nwbox.id);
            if(canqueenmove(arr, Math.floor(q/10), q%10, Math.floor(l/10), l%10)){
              nwbox.innerHTML=j;
              box.innerHTML = "";
              j =""
              turn = turn ==="white"? "black" : "white"
            }

          })
        })


      
      

    }
  }

})
})

function cankingmove(board, x1, y1, x2, y2){
  const piece = board[x1][y1];
  const newplace = board[x2][y2];
  if(piece instanceof king){
    
    if(piece.color==="white" && ((x1===7 && y1 ===4) &&(x2===7 && y2===1)&& board[7][0] instanceof rook) &&(board[7][1]===null && board[7][2]===null && board[7][3]===null)) {
      board[x2][y2]=board[x1][y1];
      board[x2][2] = board[7][0];
      wh = `${x2*10+y2}`
      console.log(wh)
      board[7][0] =null
      board[x1][y1]= null;
      return true

    }
    if(piece.color==="white" && ((x1===7 && y1 ===4) &&(x2===7 && y2===6)&& board[7][7] instanceof rook ) &&(board[7][5]===null && board[7][6]===null)){
      board[x2][y2]=board[x1][y1];
      board[x2][5] = board[7][7];
      wh = `${x2*10+y2}`
      console.log(wh)
      board[7][7] =null
      board[x1][y1]= null;
      return true

    }
    if(piece.color==="black" && ((x1===0 && y1 ===4) &&(x2===0 && y2===1)&& board[0][0] instanceof rook) &&(board[0][1]===null && board[0][2]===null && board[0][3]===null)) {
      board[x2][y2]=board[x1][y1];
      board[x2][2] = board[0][0];
      bl =`${x2*10+y2}`
      console.log(bl)
      board[x1][y1]= null;
      return true

    }
    if(piece.color==="black" && ((x1===0 && y1 ===4) &&(x2===0 && y2===6)&& board[0][7] instanceof rook ) &&(board[0][5]===null && board[0][6]===null)){
      board[x2][y2]=board[x1][y1];
      board[0][5] = board[0][7];
      bl =`${x2*10+y2}`
      console.log(bl)
      board[0][7] =null
      board[x1][y1]= null;
      return true

    }
    if((Math.abs(x2-x1) ===1|| Math.abs(y2-y1)===1)&&(newplace ===null || newplace.color !== piece.color) && piece.color === turn){
      if(piece.color ==="white"){
        wh = `${x2*10+y2}`
        console.log(wh)
        
      }else if(piece.color === "black"){
        bl =`${x2*10+y2}`
        console.log(bl)
      }
      board[x2][y2] = board[x1][y1];
      board[x1][y1] = null;
      return true
       
    }
    

    
    }
    return false
}
boxes.forEach(box =>{
  box.addEventListener("click", ()=>{
    let q =(+box.id);
    
    
    if(box.innerHTML){
      
      if(arr[Math.floor(q/10)][q%10].name ===king.name){
        let j= box.innerHTML;
        boxes.forEach(nwbox =>{
          nwbox.addEventListener("click", ()=>{
            let l = (+nwbox.id);
            if(cankingmove(arr, Math.floor(q/10), q%10, Math.floor(l/10), l%10)){
              if(l%10===1 && Math.floor(l/10)===7){
                document.getElementById("72").innerHTML="<div><img src='img/wr.png' alt=''></div>";
                document.getElementById("70").innerHTML ="";
                


              }
              else if(l%10===6 && Math.floor(l/10)===7){
                document.getElementById("75").innerHTML="<div><img src='img/wr.png' alt=''></div>";
                document.getElementById("77").innerHTML ="";
                

              }
              if(l%10===1 && Math.floor(l/10)===0){
                document.getElementById("02").innerHTML="<div><img src='img/br.png' alt=''></div>";
                document.getElementById("00").innerHTML ="";
                


              }
              else if(l%10===6 && Math.floor(l/10)===0){
                document.getElementById("05").innerHTML="<div><img src='img/br.png' alt=''></div>";
                document.getElementById("07").innerHTML ="";
               

              }
                
              nwbox.innerHTML=j;
              box.innerHTML = "";
              j =""
              turn = turn ==="white"? "black" : 'white'
              
            }

          })
        })


      
      

    }
  }

})
})



console.log(arr)

