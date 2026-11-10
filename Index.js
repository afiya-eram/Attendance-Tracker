
let currentUser = localStorage.getItem("currentUser");
let a1 = document.getElementById("a1");
a1.innerHTML = "Welcome " + localStorage.getItem("name") + " " + new Date().toLocaleDateString();
let subjects = JSON.parse(localStorage.getItem(currentUser + "_subjects")) || [];
for (let i = 0; i < subjects.length; i++) {
    document.getElementById(`sub${i + 1}`).innerHTML = subjects[i];
}
let subjectForm = document.getElementById("subjectForm");
let subjectCards = document.getElementById("subjectCards");
subjectCards.style.display = "none";
if (subjects.length === 6) {
    subjectForm.style.display = "none";
    subjectCards.style.display = "";
}

else {
    for (let i = 0; i < 6; i++) {

        let addSubjectBtn = document.getElementById(`addSubjectBtn${i + 1}`);
        addSubjectBtn.addEventListener("click", function () {
            let subjectName = document.getElementById(`subjectName${i + 1}`).value;
            if (subjectName.trim() !== "") {

                if (subjects.includes(subjectName.trim())) {
                    alert("Subject already exists!");
                    return;
                }

                subjects.push(subjectName);
                document.getElementById(`sub${i + 1}`).innerHTML = subjectName.trim();
                localStorage.setItem(currentUser + "_subjects", JSON.stringify(subjects));

                addSubjectBtn.innerHTML = "Subject Added ✅";
                addSubjectBtn.style.backgroundColor = "#E9DDF5";
                addSubjectBtn.style.color = "black";

                document.getElementById(`subjectName${i + 1}`).disabled = true;
                addSubjectBtn.disabled = true;

                if (subjects.length === 6) {
                    setTimeout(() => {
                        subjectForm.style.display = "none";
                        subjectCards.style.display = "";
                    }, 1000);
                }
            }

            else {
                alert("Please enter a valid subject name.");
            }
        });
    }
}


let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function () {

    localStorage.removeItem("name");
    localStorage.removeItem("currentUser");
    localStorage.removeItem(currentUser + "_subjects");

    for (let i = 1; i <= 6; i++) {

        localStorage.removeItem(currentUser + `_present${i}`);
        localStorage.removeItem(currentUser + `_absent${i}`);

    }

    window.location.href = "index.html";

});


let tick1 = document.getElementById('tick1');
let cross1 = document.getElementById('cross1');
let tick2 = document.getElementById('tick2');
let cross2 = document.getElementById('cross2');
let tick3 = document.getElementById('tick3');
let cross3 = document.getElementById('cross3');
let tick4 = document.getElementById('tick4');
let cross4 = document.getElementById('cross4');
let tick5 = document.getElementById('tick5');
let cross5 = document.getElementById('cross5');
let tick6 = document.getElementById('tick6');
let cross6 = document.getElementById('cross6');
let d1 = document.getElementById('d1');
let d2 = document.getElementById('d2');
let d3 = document.getElementById('d3');
let d4 = document.getElementById('d4');
let d5 = document.getElementById('d5');
let d6 = document.getElementById('d6');

let i1 = Number(localStorage.getItem(currentUser + "_present1"));
let i2 = Number(localStorage.getItem(currentUser + "_present2"));
let i3 = Number(localStorage.getItem(currentUser + "_present3"));
let i4 = Number(localStorage.getItem(currentUser + "_present4"));
let i5 = Number(localStorage.getItem(currentUser + "_present5"));
let i6 = Number(localStorage.getItem(currentUser + "_present6"));

let j1 = Number(localStorage.getItem(currentUser + "_absent1"));
let j2 = Number(localStorage.getItem(currentUser + "_absent2"));
let j3 = Number(localStorage.getItem(currentUser + "_absent3"));
let j4 = Number(localStorage.getItem(currentUser + "_absent4"));
let j5 = Number(localStorage.getItem(currentUser + "_absent5"));
let j6 = Number(localStorage.getItem(currentUser + "_absent6"));

let present = [i1, i2, i3, i4, i5, i6];
let absent = [j1, j2, j3, j4, j5, j6];

document.getElementById("s1").innerHTML = i1;
document.getElementById("s2").innerHTML = i2;
document.getElementById("s3").innerHTML = i3;
document.getElementById("s4").innerHTML = i4;
document.getElementById("s5").innerHTML = i5;
document.getElementById("s6").innerHTML = i6;

document.getElementById("j1").innerHTML = j1;
document.getElementById("j2").innerHTML = j2;
document.getElementById("j3").innerHTML = j3;
document.getElementById("j4").innerHTML = j4;
document.getElementById("j5").innerHTML = j5;
document.getElementById("j6").innerHTML = j6;

let p1 = 0;
let p2 = 0;
let p3 = 0;
let p4 = 0;
let p5 = 0;
let p6 = 0;

tick1.addEventListener("click", function () {
    i1++;
    present[0] = i1;
    let pre = document.getElementById('s1')
    pre.innerHTML = i1;
    p1 = ((i1) / (i1 + j1)) * 100;
    document.getElementById("d1").innerHTML = p1.toFixed(2) + "%";
    localStorage.setItem(currentUser + "_present1", i1);
    lastAction[0] = "present";
});

tick2.addEventListener("click", function () {
    i2++;
    present[1] = i2;
    let pre = document.getElementById('s2')
    pre.innerHTML = i2;
    p2 = ((i2) / (i2 + j2)) * 100;
    document.getElementById("d2").innerHTML = p2.toFixed(2) + "%";
    localStorage.setItem(currentUser + "_present2", i2);
    lastAction[1] = "present";
});

tick3.addEventListener("click", function () {
    i3++;
    present[2] = i3;
    let pre = document.getElementById('s3')
    pre.innerHTML = i3;
    p3 = ((i3) / (i3 + j3)) * 100;
    document.getElementById("d3").innerHTML = p3.toFixed(2) + "%";
    localStorage.setItem(currentUser + "_present3", i3);
    lastAction[2] = "present";
});

tick4.addEventListener("click", function () {
    i4++;
    present[3] = i4;
    let pre = document.getElementById('s4')
    pre.innerHTML = i4;
    p4 = ((i4) / (i4 + j4)) * 100;
    document.getElementById("d4").innerHTML = p4.toFixed(2) + "%";
    localStorage.setItem(currentUser + "_present4", i4);
    lastAction[3] = "present";
});

tick5.addEventListener("click", function () {
    i5++;
    present[4] = i5;
    let pre = document.getElementById('s5')
    pre.innerHTML = i5;
    p5 = ((i5) / (i5 + j5)) * 100;
    document.getElementById("d5").innerHTML = p5.toFixed(2) + "%";
    localStorage.setItem(currentUser + "_present5", i5);
    lastAction[4] = "present";
});

tick6.addEventListener("click", function () {
    i6++;
    present[5] = i6;
    let pre = document.getElementById('s6')
    pre.innerHTML = i6;
    p6 = ((i6) / (i6 + j6)) * 100;
    document.getElementById("d6").innerHTML = p6.toFixed(2) + "%";
    localStorage.setItem(currentUser + "_present6", i6);
    lastAction[5] = "present";
});

cross1.addEventListener("click", function () {
    j1++;
    absent[0] = j1;
    let pre = document.getElementById('j1')
    pre.innerHTML = j1;
    p1 = ((i1) / (i1 + j1)) * 100;
    document.getElementById("d1").innerHTML = p1.toFixed(2) + "%";
    localStorage.setItem(currentUser + "_absent1", j1);
    lastAction[0] = "absent";
});

cross2.addEventListener("click", function () {
    j2++;
    absent[1] = j2;
    let pre = document.getElementById('j2')
    pre.innerHTML = j2;
    p2 = ((i2) / (i2 + j2)) * 100;
    document.getElementById("d2").innerHTML = p2.toFixed(2) + "%";
    localStorage.setItem(currentUser + "_absent2", j2);
    lastAction[1] = "absent";
});

cross3.addEventListener("click", function () {
    j3++;
    absent[2] = j3;
    let pre = document.getElementById('j3')
    pre.innerHTML = j3;
    p3 = ((i3) / (i3 + j3)) * 100;
    document.getElementById("d3").innerHTML = p3.toFixed(2) + "%";
    localStorage.setItem(currentUser + "_absent3", j3);
    lastAction[2] = "absent";
});

cross4.addEventListener("click", function () {
    j4++;
    absent[3] = j4;
    let pre = document.getElementById('j4')
    pre.innerHTML = j4;
    p4 = ((i4) / (i4 + j4)) * 100;
    document.getElementById("d4").innerHTML = p4.toFixed(2) + "%";
    localStorage.setItem(currentUser + "_absent4", j4);
    lastAction[3] = "absent";
});

cross5.addEventListener("click", function () {
    j5++;
    absent[4] = j5;
    let pre = document.getElementById('j5')
    pre.innerHTML = j5;
    p5 = ((i5) / (i5 + j5)) * 100;
    document.getElementById("d5").innerHTML = p5.toFixed(2) + "%";
    localStorage.setItem(currentUser + "_absent5", j5);
    lastAction[4] = "absent";
});

cross6.addEventListener("click", function () {
    j6++;
    absent[5] = j6;
    let pre = document.getElementById('j6')
    pre.innerHTML = j6;
    p6 = ((i6) / (i6 + j6)) * 100;
    document.getElementById("d6").innerHTML = p6.toFixed(2) + "%";
    localStorage.setItem(currentUser + "_absent6", j6);
    lastAction[5] = "absent";
});

let undoButtons = document.querySelectorAll(".undoBtn");
let lastAction = [null, null, null, null, null, null];
undoButtons.forEach(function (btn, index) {

    btn.addEventListener("click", function () {

        if (lastAction[index] === "present" && present[index] > 0) {

            present[index]--;
            document.getElementById(`s${index + 1}`).innerHTML = present[index];

            localStorage.setItem(currentUser + `_present${index + 1}`, present[index]);

        }

        else if (lastAction[index] === "absent" && absent[index] > 0) {

            absent[index]--;
            document.getElementById(`j${index + 1}`).innerHTML = absent[index];

            localStorage.setItem(currentUser + `_absent${index + 1}`, absent[index]);

        }

        else {
            alert("Nothing to undo!");
            return;
        }

        let percentage = (present[index] / (present[index] + absent[index])) * 100;

        document.getElementById(`d${index + 1}`).innerHTML =
            (isNaN(percentage) ? 0 : percentage.toFixed(2)) + "%";

        lastAction[index] = null;

    });

});

