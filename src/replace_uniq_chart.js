(function(g){

var chars = [
'@', '#', '&', '%', '-', ',',
'a', 'b', 'c', 'd', 'e', 'f', 'g',
'h', 'i', 'j', 'k', 'l', 'm', 'n',
'o', 'q', 'r', 's', 't', 'u',
'v', 'w', 'x', 'y', 'z'
];

// replaceCharはstringかRegExpのインスタンス
g.replaceUniqChart = function(str, replaceChar, cb){
  var i, reg, val, list = [], replacedStr;

  if( typeof str !== 'string'){
    return str;
  }
  
  var uniqChar = getUniqChar(str);
  if( !uniqChar ){ return str; }
  
  reg = new RegExp(replaceChar, 'g');
  
  replacedStr = str.replace(reg, uniqChar);
  console.info("replaceChar:"+replaceChar);
  console.info("replacedStr:"+replacedStr);
  val = cb(replacedStr, uniqChar);
  reg = new RegExp(uniqChar, 'g');

  if(val instanceof Array){
      for(i=0;i<val.length;i+=1){
        list.push(val[i].replace(reg, replaceChar));
      }
      return list;
  }else{  
      return val.replace(reg, replaceChar);
  }
};

function getUniqChar(str){
  var i, reg, len = chars.length;

    for(i=0; i <= len; i+=1){
      reg = new RegExp(chars[i], 'g');
      if( !str.match(reg) ){
        console.info(chars[i]+"を返す:"+str);
        return chars[i];
      }
    } 
}

})(this);