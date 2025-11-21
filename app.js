// Question No 01
function showBtn1() {
    let newPage = window.open("", "_ blank")
    var a = "10";
    newPage.document.write("The default value of a is:", a, "</br>");
    newPage.document.write("........................................................", "</br>", "</br>");

    ++a
    newPage.document.write("The Value of ++a is:", a, "</br>")
    newPage.document.write("Now The Value of a is:", a)
    newPage.document.write("</br>", "</br>", "</br>");

    newPage.document.write("The Value of a++ is:", a, "</br>")
    a++
    newPage.document.write("Now The Value of a is:", a)
    newPage.document.write("</br>", "</br>");

    --a
    newPage.document.write("The Value of --a is:", a, "</br>")
    newPage.document.write("Now The Value of a is:", a)
    newPage.document.write("</br>", "</br>", "</br>");

    newPage.document.write("The Value of a-- is:", a, "</br>")
    a--
    newPage.document.write("Now The Value of a is:", a)
    newPage.document.write("</br>", "</br>", "</br>", "</br>");

    newPage.document.write(console.log(--a - --b + ++b + b--))
};

// Quetion No 02
function showBtn2() {
    let newPage = window.open("", "_ blank");
    var a = 2, b = 1;           //two variable
    newPage.document.write("value of A is ", a, "</br>", "value of B is ", b, "</br>", "</br>");
    --a;
    newPage.document.write("Here The value of --a is: ", a, "</br>", "</br>");
    --a - --b;
    newPage.document.write("Here The value of --a - --b is: ", a, b, "</br>", "</br>");
    --a - --b + ++b;
    newPage.document.write("Here The value of --a - --b + ++b is:", "</br>", " Value of --a: ", a, "</br>", " Value of --b: ", b, "</br>", " Value of ++b:", b, "</br>", "</br>");
    --a - --b + ++b + b--;
    newPage.document.write("Here The value of --a - --b + ++b + b-- is: ", --a - --b + ++b + b--);
};

// Quetion No 03
function showBtn3() {
    var Name = prompt("Enter Your name");
    if (Name) {
        alert("Hi " + Name + " Nice to meet you")
    } else {
        alert("Hi Stranger!")
    }
};

// Quetion No 04
function showBtn4() {
    alert("There is no question")
};

// Quetion No 05
function showBtn5() {
    let table = prompt("Enter a number for multiplication table:");
    
    if (table === "" || table === null) {
        table = 5;
    }
    
    document.write("<h2>Multiplication Table of " + table + "</h2>");

    for (let i = 1; i <= 10; i++) {
        document.write(table + "x" + i + "=" + (table * i) + "</br>");
    }
};

// Quetion No 06
function showBtn6() {
    let sub1 = prompt("Enter first Subject Name");
    let sub2 = prompt("Enter Secound Subject Name");
    let sub3 = prompt("Enter Third Subject Name");
    
    let totalMarks = 100;
    
    let Mark1 = +prompt("Enter obtained marks " + sub1);
    let Mark2 = +prompt("Enter obtained marks " + sub2);
    let Mark3 = +prompt("Enter obtained marks " + sub3);
    let totalObtainedMarks = Mark1 + Mark2 + Mark3;
    let percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

    
    document.write("<table border='1' cellpadding='10'>")
    document.write("<h1>Mark Sheet</h1>");
    document.write("<tr><th>Subjects</th><th>Tatal Marks</th><th>Obtained Marks</th></tr>");
    document.write("<tr><td>" + sub1 + "</td>" + "<td>" + totalMarks + "</td>" + "<td>" + Mark1 + "</td></tr>");
    document.write("<tr><td>" + sub2 + "</td>" + "<td>" + totalMarks + "</td>" + "<td>" + Mark2 + "</td></tr>");
    document.write("<tr><td>" + sub3 + "</td>" + "<td>" + totalMarks + "</td>" + "<td>" + Mark3 + "</td></tr>");
    document.write("<tr><th> Total </th><th>"+(totalMarks * 3)+"</th><th>" + totalObtainedMarks + "</th></tr>");
    document.write("</table>")

    document.write("<h3>Percentage: " + percentage.toFixed(2) + "%</h3>");
};
