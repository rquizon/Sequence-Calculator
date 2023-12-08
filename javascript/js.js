function solveSequence() {
    var sequenceType = document.getElementById("sequenceType").value;
    var termNum = document.getElementById("termNum").value;
    var resultTable = document.getElementById("resultTable");
    var termsListContainer = document.getElementById("termsListContainer");

    // Clear previous results
    resultTable.innerHTML = "";
    termsListContainer.innerHTML = "";

    // Validate input
    if (!termNum || termNum <= 0) {
        alert("Please enter a valid term number.");
        return;
    }

    // Perform sequence calculation
    var sequenceArray = calculateSequence(sequenceType, termNum);

    // Display the results in the table
    displayResults(sequenceArray);

    displayTermsList(sequenceArray);
}

function displayTermsList(sequenceArray) {
    var termsListContainer = document.getElementById("termsListContainer");

    var header = document.createElement("h4");
    header.textContent = "List of Terms:";
    termsListContainer.appendChild(header);

    var termsList = document.createElement("p");
    termsList.textContent = "{" + sequenceArray.join(', ') + "}";

    termsList.textContent = termsList.textContent.replace(/Term (\d+): (\d+)/g, '$2');

    termsListContainer.appendChild(termsList);
}

function calculateSequence(sequenceType, termNum) {
    var sequenceArray = [];

    switch (sequenceType) {
        case '1':
            sequenceArray = calculateFibonacci(termNum);
            break;
        case '2':
            sequenceArray = calculateLucas(termNum);
            break;
        case '3':
            sequenceArray = calculateTribonacci(termNum);
            break;
        case '4':
            sequenceArray = calculateCollatz(termNum);
            break;
        default:
            break;
    }

    return sequenceArray;
}

function calculateFibonacci(termNum) {
    var sequenceArray = [];
    var f0 = 0, f1 = 1;

    for (var i = 1; i <= termNum; i++) {
        var nthTerm = f0 + f1;
        f0 = f1;
        f1 = nthTerm;
        sequenceArray.push(f0);
    }

    return sequenceArray;
}

function calculateLucas(termNum) {
    var sequenceArray = [];
    var l0 = 2, l1 = 1;

    for (var i = 1; i <= termNum; i++) {
        var nthTerm = l0 + l1;
        l0 = l1;
        l1 = nthTerm;
        sequenceArray.push(l0);
    }

    return sequenceArray;
}

function calculateTribonacci(termNum) {
    var sequenceArray = [];
    var t0 = 0, t1 = 1, t2 = 1;

    for (var i = 1; i <= termNum; i++) {
        var nthTerm = t0 + t1 + t2;
        t0 = t1;
        t1 = t2;
        t2 = nthTerm;
        sequenceArray.push(t0);
    }

    return sequenceArray;
}

function calculateCollatz(startNum) {
    var sequenceArray = [];

    while (startNum !== 1) {
        if (startNum % 2 === 0) {
            startNum = startNum / 2;
        } else {
            startNum = 3 * startNum + 1;
        }
        sequenceArray.push(startNum);
    }

    return sequenceArray;
}

function displayResults(sequenceArray) {
    var resultTable = document.getElementById("resultTable");

    // Display table header
    var headerRow = resultTable.insertRow(0);
    var termHeader = headerRow.insertCell(0);
    var valueHeader = headerRow.insertCell(1);
    termHeader.innerHTML = "<b>Term</b>";
    valueHeader.innerHTML = "<b>Value</b>";

    // Display results in the table
    for (var i = 0; i < sequenceArray.length; i++) {
        var row = resultTable.insertRow(i + 1);
        var termCell = row.insertCell(0);
        var valueCell = row.insertCell(1);
        termCell.textContent = i + 1; // Display term number
        valueCell.textContent = sequenceArray[i]; // Display value
    }
}


function getSequenceTypeName(sequenceType) {
    switch (sequenceType) {
        case '1':
            return 'Fibonacci';
        case '2':
            return 'Lucas';
        case '3':
            return 'Tribonacci';
        case '4':
            return 'Collatz';
        default:
            return 'Unknown';
    }
}

function showFullContent(content) {
    console.log("Showing full content..."); // Add this line
    var contentContainer = document.getElementById("contentContainer");

    // Clear previous content
    contentContainer.innerHTML = "";

    // Create a div to display the full content
    var fullContentDiv = document.createElement("div");
    fullContentDiv.textContent = content;

    // Append the div to the content container
    contentContainer.appendChild(fullContentDiv);

    // Show the content container
    contentContainer.style.display = "block";
}

// Close the content container when clicked outside of it
document.addEventListener("click", function (event) {
    var contentContainer = document.getElementById("contentContainer");

    if (event.target !== contentContainer && !contentContainer.contains(event.target)) {
        contentContainer.style.display = "none";
    }
});

// Close the content container when clicked outside of it
document.addEventListener("click", function (event) {
    var contentContainer = document.getElementById("contentContainer");

    if (event.target !== contentContainer && !contentContainer.contains(event.target)) {
        contentContainer.style.display = "none";
    }
});