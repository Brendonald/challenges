function main() {
    var n = parseInt(readLine());
    var trie = {};
    for(var a0 = 0; a0 < n; a0++){
        var op_temp = readLine().split(' ');
        var op = op_temp[0];
        var contact = op_temp[1];
        if (op === "add") {
            trie = add(trie, contact);
        }
        else if (op === "find") {
            let count = find(trie, contact);
            console.log(count); 
        }
    }
}

/** Adds a new string to the trie
	Each letter of the string is a node in the trie.
	If the letter is not present, we add it.
	Each node (letter) is an object containing its subsequent nodes and a _count property,
	counting how many times this letter has been added at this position in the trie.	
*/
function add(trie, name) {
    if (!trie[name[0]]) {
        trie[name[0]] = {_count: 0};
    }
    
    let root = trie[name[0]];
    root._count++;
    
	for (let i=1; i<name.length; i++) {
        if (!root[name[i]]) {
            root[name[i]] = { _count: 0 };
        }
        root[name[i]]._count = root[name[i]]._count + 1;
        root = root[name[i]];
    }
    return trie;
}

/** Finds occurrences of a string in the trie
	Parses the lookup string, if it fails to find the next letter in the trie, returns 0.
	If it gets to the end of the string, the _count property of the final node tells us how 
	many time this letter was added at that position, i.e. how many times the lookup string 
	is present in the trie.
*/ 
function find(trie, lookup) {
    let root = trie[lookup[0]];
    
    if (!root) {
        return 0;
    }
    
    else {
        for (let i=1; i<lookup.length; i++) {
            let count;
            if (root[lookup[i]]) {
                root = root[lookup[i]];
            }
            else {
                return 0;
            }
        }
        return root._count;
    }
}

