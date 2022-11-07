const api_url2122 = "https://football-results-scraper.onrender.com/games?sns=2021/22";
const api_url2223 = "https://football-results-scraper.onrender.com/games?sns=2022/23";

let results21to22 = null;
let results22to23 = null;

async function getData() {

    try{
        // Making an API call (request)
        // and getting the response back
        const response2122 = await fetch(api_url2122);

        // Parsing it to JSON format
        const data2122 = await response2122.json();
        results21to22 = await data2122.results;

        // and getting the response back
        const response2223 = await fetch(api_url2223);

        // Parsing it to JSON format
        const data2223 = await response2223.json();
        results22to23 = await data2223.results;
    }
    catch(error){
        console.log(error);
        alert("Server is unavailable.\n\nServer is booting up - please wait a few minutes before trying again.");
    }

}

// Calling the function
getData();

const teams = 
[
    {"name":"Arsenal"},
    {"name":"Aston Villa"},
    {"name":"Brentford"},
    {"name":"Brighton & Hove Albion"},
    {"name":"Chelsea"},
    {"name":"Crystal Palace"},
    {"name":"Everton"},
    {"name":"Leeds United"},
    {"name":"Leicester City"},
    {"name":"Liverpool"},
    {"name":"Manchester City"},
    {"name":"Manchester United"},
    {"name":"Newcastle United"},
    {"name":"Southampton"},
    {"name":"Tottenham Hotspur"},
    {"name":"West Ham United"},
    {"name":"Wolverhampton Wanderers"}
    
];

const selectTeam = document.getElementById("team");

const table = document.getElementById("table");

const tableBody = document.getElementById("table").getElementsByTagName('tbody')[0];

for(let i = 0; i < teams.length; i++) {

    let obj = teams[i];

    let teamOption = document.createElement("option");
    teamOption.textContent = obj.name;
    teamOption.value = obj.name;
    selectTeam.appendChild(teamOption);

}

//get current selected team and update
selectTeam.addEventListener("change", function() {
    clear();
    calculate(selectTeam.value);
})

//clears table
function clear(){

    //clears table up until the header
    let rowCount = table.rows.length; 
    while(--rowCount - 1) table.deleteRow(rowCount);

}

//calculate row by row - team played, season 1, season 2, difference
function calculate(team){

    let sOne
    let sTwo

    //keeps track of teams with no matches
    let unmatchedTeams = [];

    //if no data exists, create an alert
    if(results21to22.length === null){
        alert("Server is unavailable.\n\nServer is booting up - please wait a few minutes before trying again.");
    }

    //looping over season one data
    for(let i = 0; i < results21to22.length; i++) {

        sOne = results21to22[i];

        let matches = sOne.match;

        if(matches.includes(team)){

            let formattedTeam = formatTeam(team, matches);

            let row = tableBody.insertRow();

            let teamPlayed = row.insertCell(0);
            let seasonOne = row.insertCell(1);
            let seasonTwo = row.insertCell(2);
            let difference = row.insertCell(3);

            teamPlayed.innerHTML = formattedTeam;
            seasonOne.innerHTML = sOne.result;
            //seasonTwo.innerHTML = sOne.result;
            // difference.innerHTML = 'N/A';

        }
    }

    //looping over sesaon two data
    for(let i = 0; i < results22to23.length; i++) {

        sTwo = results22to23[i];

        let matches = sTwo.match;

        if(matches.includes(team)){

            let formattedTeam = formatTeam(team, matches);

            //check if team already in table
            matchTeams(formattedTeam, sTwo, unmatchedTeams);

        }
    }

    updateOutliers(unmatchedTeams, team);

    differenceTotal();

}

//Formats the team played name for table
function formatTeam(team, match) {

    let formattedTeam = ""

    let splitTeam = match.split("_");
    if(splitTeam[0] == team){
        formattedTeam = splitTeam[1] + " (H)";
    } else {
        formattedTeam = splitTeam[0] + " (A)";
    }

    return formattedTeam;

}

//Matches up teams already in table
function matchTeams(formattedTeam, season, unmatchedTeams){

    //flag to check if team has a match
    hasMatch = false;

    let difference;

    //loop through rows
    for (var i = 0, row; row = table.rows[i]; i++) {
        
        if(row.cells[0].innerText == formattedTeam){

            row.cells[2].innerHTML = season.result;

            hasMatch = true;

            //get home or away
            let home = true;
            if(row.cells[0].innerText.includes('(A)')){
                home = false;
            }

            let rOne = row.cells[1].innerText.split('–');
            let rTwo = row.cells[2].innerText.split('–');

            // check if matching game
            if(row.cells[0].innerText.includes(formattedTeam)) {

                if(!row.cells[2].innerText == ""){

                    let seasonOneResult = 0;
                    let seasonTwoResult = 0;

                    if(home){
                        if(Number(rOne[0]) > Number(rOne[1])){
                            seasonOneResult = 3;
                        } else if (Number(rOne[0]) == Number(rOne[1])) {
                            seasonOneResult = 1;
                        } else {
                            seasonOneResult = 0;
                        }

                        if(Number(rTwo[0]) > Number(rTwo[1])){
                            seasonTwoResult = 3;
                        } else if (Number(rTwo[0]) == Number(rTwo[1])) {
                            seasonTwoResult = 1;
                        } else {
                            seasonTwoResult = 0;
                        }

                    } else{
                        if(Number(rOne[0]) > Number(rOne[1])){
                            seasonOneResult = 0;
                        } else if (Number(rOne[0]) == Number(rOne[1])) {
                            seasonOneResult = 1;
                        } else {
                            seasonOneResult = 3;
                        }

                        if(Number(rTwo[0]) > Number(rTwo[1])){
                            seasonTwoResult = 0;
                        } else if (Number(rTwo[0]) == Number(rTwo[1])) {
                            seasonTwoResult = 1;
                        } else {
                            seasonTwoResult = 3;
                        }
                    }

                    if(seasonTwoResult > seasonOneResult) {
                        difference = seasonTwoResult - seasonOneResult;
                    } else if(seasonTwoResult < seasonOneResult) {
                        difference = seasonTwoResult - seasonOneResult;
                    } else {
                        difference = 0;
                    }
                    
                    row.cells[3].innerHTML = difference;
                } else {
                    row.cells[3].innerHTML = "-";
                }

            }

        }
    }

    if(!hasMatch) {

        //updating array with outliers
        unmatchedTeams.push(season);

    }

}

//find the teams not in 2nd season and combine with outliers
function updateOutliers(unmatchedTeams, team){

    let seasonOneOnly = [];
    let seasonTwoOnly = unmatchedTeams;

    //loop over table to find teams with 1st season data only
    for (var i = 2, row; row = table.rows[i]; i++) {
        if(row.cells[3].innerText == ""){
            seasonOneOnly.push(row.cells[0].innerText);
        }
        
    }

    //format season two match names
    let sTwoUnmatchedNames = [];
    for(let i = 0; i < seasonTwoOnly.length; i++) {
        sTwoUnmatchedNames.push(formatTeam(team, seasonTwoOnly[i].match));
    }

    combinedNames = [];
    capturedName = [];

    sOneUniq = [];
    sTwoUniq = [];

    for(let i = 0; i < seasonOneOnly.length; i++) {

        if(!sOneUniq.includes(seasonOneOnly[i].slice(0, -4))) {
            
            sOneUniq.push(seasonOneOnly[i].slice(0, -4));

        }

    }

    for(let i = 0; i < sTwoUnmatchedNames.length; i++){
        if(!sTwoUniq.includes(sTwoUnmatchedNames[i].slice(0, -4))) {

            sTwoUniq.push(sTwoUnmatchedNames[i].slice(0, -4));

        }
    }

    for(let i = 0; i < sOneUniq.length; i++) {
        combinedNames.push(sOneUniq[i] + '/' + sTwoUniq[i]);
    }

    //update table
    for (var i = 2, row; row = table.rows[i]; i++) {

        for(let i = 0; i < combinedNames.length; i++) {

            let splitNames = combinedNames[i].split("/");
            let isHome;

            if(row.cells[0].innerText.slice(0, -4) == splitNames[0]){

                if(row.cells[0].innerText.slice(-3) == "(H)"){
                    isHome = true;
                    row.cells[0].innerText = combinedNames[i] + " (H)";

                    for(let i = 0; i < seasonTwoOnly.length; i++) {

                        if(seasonTwoOnly[i].match.split("_")[1] == splitNames[1]){
                            row.cells[2].innerText = seasonTwoOnly[i].result
                        }
                        
                    }
                } else {
                    isHome = false;
                    row.cells[0].innerText = combinedNames[i] + " (A)";

                    for(let i = 0; i < seasonTwoOnly.length; i++) {

                        if(seasonTwoOnly[i].match.split("_")[0] == splitNames[1]){
                            row.cells[2].innerText = seasonTwoOnly[i].result
                        }
                        
                    }
                }

                if(!row.cells[2].innerText == "") {

                    let rOne = row.cells[1].innerText.split('–');
                    let rTwo = row.cells[2].innerText.split('–');
                    
                    let seasonOneResult = 0;
                    let seasonTwoResult = 0;

                    if(isHome){
                        if(Number(rOne[0]) > Number(rOne[1])){
                            seasonOneResult = 3;
                        } else if (Number(rOne[0]) == Number(rOne[1])) {
                            seasonOneResult = 1;
                        } else {
                            seasonOneResult = 0;
                        }

                        if(Number(rTwo[0]) > Number(rTwo[1])){
                            seasonTwoResult = 3;
                        } else if (Number(rTwo[0]) == Number(rTwo[1])) {
                            seasonTwoResult = 1;
                        } else {
                            seasonTwoResult = 0;
                        }

                    } else{
                        if(Number(rOne[0]) > Number(rOne[1])){
                            seasonOneResult = 0;
                        } else if (Number(rOne[0]) == Number(rOne[1])) {
                            seasonOneResult = 1;
                        } else {
                            seasonOneResult = 3;
                        }

                        if(Number(rTwo[0]) > Number(rTwo[1])){
                            seasonTwoResult = 0;
                        } else if (Number(rTwo[0]) == Number(rTwo[1])) {
                            seasonTwoResult = 1;
                        } else {
                            seasonTwoResult = 3;
                        }
                    }

                    if(seasonTwoResult > seasonOneResult) {
                        difference = seasonTwoResult - seasonOneResult;
                    } else if(seasonTwoResult < seasonOneResult) {
                        difference = seasonTwoResult - seasonOneResult;
                    } else {
                        difference = 0;
                    }

                    row.cells[3].innerHTML = difference;

                }

            }
        }
        
    }

}

//calculates cumulative difference
function differenceTotal(){

    total = 0;

    //loop through rows
    for (var i = 2, row; row = table.rows[i]; i++) {

        //adding '-' to rows where mismatched teams have no 2nd season result
        if(row.cells[3].innerText == ''){
            row.cells[3].innerText = '-';
        }

        if(row.cells[3].innerText != '-'){
            total += Number(row.cells[3].innerText);

            //formatting cells
            if(Number(row.cells[3].innerText) > 0){
                row.cells[3].style.backgroundColor = "lightgreen";
            } else if(Number(row.cells[3].innerText) === 0){
                row.cells[3].style.backgroundColor = "lightyellow";
            } else {
                row.cells[3].style.backgroundColor = "indianred";
            }
        }
    }

    //creating total footer
    let footerRow = tableBody.insertRow();
    footerTitle = footerRow.insertCell(0);
    footerTitle.setAttribute("colspan", "3");
    footerTitle.innerText = "Total";
    footerTitle.style.fontWeight = "bold";
    let totalCell = footerRow.insertCell(1);
    totalCell.innerText = total;

    //formatting cell
    if(Number(totalCell.innerText) > 0){
        totalCell.style.backgroundColor = "lightgreen";
    } else if(Number(totalCell.innerText) === 0){
        totalCell.style.backgroundColor = "lightyellow";
    } else {
        totalCell.style.backgroundColor = "indianred";
    }

}


//TODO:
//colour the cells in the seasons columns
//add the team names to be called from api
//Make code generic code to be reused/ clean up code
//make use of map function
//make more adaptive for more seasons
