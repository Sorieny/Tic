var CROSS='X';
var NOUGHT='O';

var model=[];
var cells=[];

var flag;

var newGame=function(){
  for (i=0; i<5; i++)
      for (j=0; j<5; j++){
          model[i][j]=0;
          cells[i][j].text=' ';
      } 
  flag=1;    
}

var freshView=function(){
  var i, j;

  for (i=0; i<5; i++)
      for(j=0; j<5; j++)
          if(model[i][j]==1)
              cell[i][j].text=CROSS;
          else if(model[i][j]==2)
          cell[i][j].text=NOUGHT;
}

var checkWin=function(x,y){
  if(model[x][y]!=0 && model[0][y]==model[1][y] && model[0][y]==model[2][y] && model[0][y]==model[3][y] && model[0][y]==model[4][y])
    return 1;
     
  if(model[x][y]!=0 && model[x][0]==model[x][1] && model[x][0]==model[x][2] && model[x][0]==model[x][3] && model[x][0]==model[x][4])
    return 1;

  if(x==y)
    if(model[0][0]!=0 && model[0][0]==model[1][1] && model[0][0]==model[2][2] && model[0][0]==model[3][3] && model[0][0]==model[4][4])
      return 1;
  
  if((x==4 && y==0) || (x==3 && y==1) || (x==2 && y==2) || (x==1 && y==3) || (x==0 && y==4))
    if(model[4][0]!=0 && model[4][0]==model[3][1] && model[4][0]==model[2][2] && model[4][0]==model[1][3] && model[4][0]==model[0][4])
      return 1;

  return 0;
}

window.onload=function(){
  var i, j;

  for (i=0; i<5; i++)
      model[i]=[];
      cells[i]=[];     
}

  for (i=0; i<5; i++)
      for (j=0; j<3; j++){
          cells[i][j]=document.getElementById('cell-' +i+'-'+j);

          (function(i,j){
            cells[i][j].onclick=function(){
                model[i][j]=flag+1;

                if(flag)
                   flag=0;
                else(flag)
                    flag=1;

                freshView();

                if(checkWin(i,j)){
                  if(flag)
                    alert("Player with"+CROSS+"win!");
                  else(flag)
                    alert("Player with"+NOUGHT+"win!");
                  newGame();
                }
            }
        })(i,j);
    }
  newGame();
}
