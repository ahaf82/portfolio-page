  var r = 0;
  a = document.cookie;
    while (a != '') {
      while(a.substr(0,1) == ' '){
        a = a.substr(1,a.length);
      }
      cn = a.substring(0,a.indexOf('='));
      if(a.indexOf(';') != -1){
        cw = a.substring(a.indexOf('=')+1,a.indexOf(';'));
      } else {
        cw = a.substr(a.indexOf('=')+1,a.length);
      }
      if(cn == 'ahaf-cookie'){
        r = cw;
      }
      i = a.indexOf(';')+1;
      if(i == 0) {i = a.length}
        a = a.substring(i,a.length);
      }
    if (r == '1') document.getElementById('ahaf-cookie').style.display = 'none';
