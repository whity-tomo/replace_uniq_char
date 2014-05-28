describe("replaceUniqChart", function() {

  var f = replaceUniqChart;
  var str;

  beforeEach(function() {
    str = "";
  });

  it("return without change", function() {
    expect(f(123, "x")).toEqual(123);
  });

  it("no change", function() {
    expect(f("a@b@c@d", "@", function(s, uniqChar){
      return s;
    })).toEqual("a@b@c@d");
  });
 
   it("truncate sample", function() {
     expect(f('あ&nbsp;い&nbsp;う&nbsp;え&nbsp;お', '&nbsp;', function(s, uniqChar){
       return s.substr(0, 3);
     })).toEqual('あ&nbsp;い');
  });

   it("truncate RegExp sample", function() {
     list = f('あ<br />い<br />う<br />え<br />お', '<br />', function(s, uniqChar){
       return [s.substr(0, 3), s.substr(4, 3)];
     });

     expect(list[0]).toEqual('あ<br />い');
     expect(list[1]).toEqual('う<br />え');
  });

});

