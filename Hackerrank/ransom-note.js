process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');

    let canReplicate = canReplicateNote(ransom, magazine);
    console.log(canReplicate);
}

function canReplicateNote(ransom, magazine) {
    wordFreq = {};
    magazine.forEach(word => {
       wordFreq[word] = (wordFreq[word] || 0) + 1; 
    });
    for (let word of ransom) {
        wordFreq[word] = (wordFreq[word] || 0) - 1;
        if (wordFreq[word] < 0) {
            return "No";
        }
    }
    return "Yes";
}
