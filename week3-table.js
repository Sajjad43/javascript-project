
document.write("<h1>Hello</h1>");





let attendanceObject = {
  startDate: "june 7, 2014",
  endDateLength: 7,
  attendanceArray: [
    {
      name: "Ted",
      aList: [
        true,
        false,
        true,
        true,
        true,
        false,
        true
      ]
    }, {
      name: "John",
      aList: [
        false,
        false,
        true,
        true,
        true,
        false,
        true
      ]
    }, {
      name: "Dave",
      aList: [
        false,
        false,
        false,
        true,
        true,
        false,
        true
      ]
    }, {
      name: "Tom",
      aList: [
        true,
        true,
        true,
        true,
        true,
        true,
        true
      ]
    }, {
      name: "Mat",
      aList: [
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    }, {
      name: "Gregory",
      aList: [
        true,
        false,
        false,
        false,
        false,
        false,
        true
      ]
    },
    {
      name: "klll",
      aList: [
        true,
        false,
        false,
        false,
        false,
        false,
        true
      ]
    }

  ]
};

document.write("<table class='table table-bordered'>");
      var date=new Date(attendanceObject.startDate);
      /*document.write("<h1>"+ date.getDate() +"</h1>");*/
      var d = date.getDate();
      var m = date.getMonth() + 1;
      var y = date.getFullYear();


                  document.write("<tr> <td>"+'name'+"</td>");
                    for(var k = 0; k < attendanceObject.endDateLength; k++)
                    {
                      document.write("<td >" +(d+k) +"/" +m +"/" +y  +"</td>");
                    }
                  document.write("</tr>");

                  for(var i=0;i<attendanceObject.attendanceArray.length;i++)
                  {
                      document.write("<tr><td >"+ attendanceObject.attendanceArray[i].name +"</td>");

                        for(var j=0;j<attendanceObject.attendanceArray[i].aList.length;j++){
                          document.write("<td style='background-color:blue' onClick='myFunction(this)' id='"+i+"-"+j+ "'>"+attendanceObject.attendanceArray[i].aList[j]+"</td>");

                        }


                        document.write("</tr>");
                  }

document.write("</table>");
var myFunction=function (event) {
   console.log(event);
   var split=event.id.split("-");
   var i=parseInt(split[0],10);
   var j=parseInt(split[1],10);

   console.log(attendanceObject.attendanceArray[i].aList[j]);
   attendanceObject.attendanceArray[i].aList[j]=!attendanceObject.attendanceArray[i].aList[j];
   event.style.backgroundColor="rgb(255, 255, 255)";
   event.innerHTML=""+attendanceObject.attendanceArray[i].aList[j];
   console.log(attendanceObject.attendanceArray[i].aList[j]);


}
