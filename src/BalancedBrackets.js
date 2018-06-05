function BalancedBrackets()
{
    this.BalanceBrackets= function(input){
        let counter=0;
        for(let i=0; i<input.length; i++){
            if(input[i]=="["){
                counter++;
            }
            else{
                counter--;
            }
            if(counter<0){
                return "FAIL";
            }
        }
       return "OK";
    }
}