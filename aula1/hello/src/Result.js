import React from 'react';

const Result = ({term,secretNum})=>{
    let result;
    const guess = Number(term);
    if(term){
        if(secretNum>guess){
            result = 'Digite um numero Maior!';
        }else if(secretNum<guess){
            result ='Digite um numero Menor!';
        }
        else{
            result ='Você Acertou!';
        }
    }
    return<h3>{result}</h3>

}
export default Result;